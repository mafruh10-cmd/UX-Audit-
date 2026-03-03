"""
Doodle Whiteboard Animator v6 — Text-First Slide Animator

Pipeline per slide:
  1. Detect text rows via morphological horizontal-band analysis
  2. Extract illustration contours (text regions masked out)
  3. Render: text rows revealed left-to-right FIRST, then illustration
     outlines drawn object-by-object, original colour fills in immediately
     after each element completes.

No external API required.
"""

import cv2
import glob
import json
import math
import numpy as np
import os
import queue
import shutil
import subprocess
import tempfile
import threading
import tkinter as tk
from dataclasses import dataclass, field
from pathlib import Path
from tkinter import filedialog, messagebox, ttk
from typing import Dict, List, Optional, Tuple

# ---------------------------------------------------------------------------
# Constants
# ---------------------------------------------------------------------------
CW, CH            = 1920, 1080
DRAW_COL          = (30, 30, 30)   # near-black stroke colour
LW                = 1              # illustration stroke width (px)
TRANSITION_FRAMES = 18             # white-fade frames between slides (~0.6 s @ 30 fps)
MIN_SLIDE_SEC     = 4              # minimum seconds between detected slide changes
SKETCH_THRESHOLD  = 205            # brightness below which a pixel is "ink"
TEXT_WEIGHT       = 4              # time-multiplier: each text row gets 4× illus stroke


# ---------------------------------------------------------------------------
# Data classes
# ---------------------------------------------------------------------------

@dataclass
class VideoInfo:
    width: int; height: int; fps: float
    total_frames: int; duration: float
    has_audio: bool; audio_codec: str = ""


@dataclass
class SlideInfo:
    timestamp:  float    # seconds when slide first appears
    end_time:   float    # seconds when next slide appears (or video end)
    frame_path: str      # path to extracted PNG of this slide


@dataclass
class SlideSegment:
    """Fully-prepared slide ready for rendering."""
    start: float
    end:   float
    # Text rows (x0,y0,x1,y1) ordered top→bottom — revealed left-to-right
    text_rows:     List[Tuple[int, int, int, int]] = field(default_factory=list)
    # Illustration contour strokes ordered object-by-object
    illus_strokes: List[List[Tuple[int, int]]]     = field(default_factory=list)
    # Original colour frame for per-element fill reveal
    color_bgr: Optional[np.ndarray] = None


# ---------------------------------------------------------------------------
# FFmpeg / probe helpers
# ---------------------------------------------------------------------------

def check_ffmpeg() -> None:
    for tool in ("ffmpeg", "ffprobe"):
        try:
            subprocess.run([tool, "-version"],
                           stdout=subprocess.DEVNULL,
                           stderr=subprocess.DEVNULL, check=True)
        except (FileNotFoundError, subprocess.CalledProcessError):
            raise RuntimeError(f"'{tool}' not found.\nInstall:  brew install ffmpeg")


def probe_video(path: str) -> VideoInfo:
    cmd = ["ffprobe", "-v", "quiet", "-print_format", "json",
           "-show_streams", "-show_format", path]
    data = json.loads(subprocess.run(cmd, capture_output=True,
                                     text=True, check=True).stdout)
    vs  = next((s for s in data["streams"] if s["codec_type"] == "video"), None)
    as_ = next((s for s in data["streams"] if s["codec_type"] == "audio"), None)
    if not vs:
        raise RuntimeError("No video stream found.")
    try:
        num, den = vs.get("r_frame_rate", "30/1").split("/")
        fps = float(num) / float(den) if float(den) else 30.0
    except (ValueError, ZeroDivisionError):
        fps = 30.0
    W, H = int(vs["width"]), int(vs["height"])
    dur  = float(data.get("format", {}).get("duration", 0) or vs.get("duration", 0))
    tf   = int(vs.get("nb_frames", 0)) or int(dur * fps)
    return VideoInfo(W, H, fps, tf, dur,
                     as_ is not None,
                     as_.get("codec_name", "") if as_ else "")


def extract_audio_files(path: str, tmp: str,
                        info: VideoInfo) -> Tuple[Optional[str], Optional[str]]:
    """Extract AAC (for mux). Returns (aac_path, None); either may be None on failure."""
    if not info.has_audio:
        return None, None
    aac = os.path.join(tmp, "audio.aac")
    r = subprocess.run(["ffmpeg", "-y", "-i", path, "-vn", "-acodec", "copy", aac],
                       capture_output=True)
    if r.returncode != 0 or not os.path.exists(aac) or os.path.getsize(aac) == 0:
        r2 = subprocess.run(["ffmpeg", "-y", "-i", path, "-vn",
                              "-acodec", "aac", "-b:a", "192k", aac],
                             capture_output=True)
        if r2.returncode != 0:
            return None, None
    return aac, None


# ---------------------------------------------------------------------------
# Phase 1 — Slide detection
# ---------------------------------------------------------------------------

def detect_slides(video_path: str,
                  tmp_dir: str,
                  scene_threshold: float = 0.08,
                  status_cb=None) -> List[SlideInfo]:
    """
    Detect slide changes using 1 fps frame extraction + centre-crop diff.
    Returns one SlideInfo per slide.
    """
    frames_dir = os.path.join(tmp_dir, "frames")
    os.makedirs(frames_dir, exist_ok=True)

    if status_cb: status_cb("Extracting 1fps frames for slide detection…")
    subprocess.run([
        "ffmpeg", "-y", "-i", video_path, "-r", "1", "-q:v", "2",
        os.path.join(frames_dir, "f%05d.jpg")
    ], capture_output=True, check=True)

    frame_files = sorted(glob.glob(os.path.join(frames_dir, "f*.jpg")))
    if not frame_files:
        raise RuntimeError("No frames extracted — check FFmpeg and input file.")

    res = subprocess.run(
        ["ffprobe", "-v", "quiet", "-show_format", "-print_format", "json", video_path],
        capture_output=True, text=True)
    video_duration = float(
        json.loads(res.stdout).get("format", {}).get("duration", len(frame_files)))

    boundaries: List[int] = [0]
    prev_crop = None

    for i, fp in enumerate(frame_files):
        img = cv2.imread(fp)
        if img is None:
            continue
        gray  = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        small = cv2.resize(gray, (320, 180))
        h, w  = small.shape
        crop  = small[h//5: 4*h//5, w//5: 4*w//5]
        if prev_crop is not None:
            score = float(np.mean(cv2.absdiff(crop, prev_crop))) / 255.0
            if score > scene_threshold and (i - boundaries[-1]) >= MIN_SLIDE_SEC:
                boundaries.append(i)
                if status_cb:
                    status_cb(f"  Slide change at {i}s  (diff={score:.3f})")
        prev_crop = crop

    boundaries.append(len(frame_files))

    slides: List[SlideInfo] = []
    for b in range(len(boundaries) - 1):
        s_frame, e_frame = boundaries[b], boundaries[b + 1]
        # Take frame 2 s after boundary — avoids transitions/build-in animations
        clean_idx  = min(s_frame + 2, e_frame - 1, len(frame_files) - 1)
        clean_path = frame_files[clean_idx]
        slide_png  = os.path.join(tmp_dir, f"slide_{len(slides):03d}.png")
        img = cv2.imread(clean_path)
        if img is not None:
            cv2.imwrite(slide_png, img)
        else:
            shutil.copy(clean_path, slide_png)
        t_start = float(s_frame)
        t_end   = float(e_frame) if e_frame < len(frame_files) else video_duration
        slides.append(SlideInfo(timestamp=t_start, end_time=t_end,
                                frame_path=slide_png))

    if status_cb:
        status_cb(f"Detected {len(slides)} slide(s)")
    return slides


# ---------------------------------------------------------------------------
# Phase 2 — Frame → Sketch / Colour conversion
# ---------------------------------------------------------------------------

def slide_to_sketch(frame: np.ndarray) -> np.ndarray:
    """Convert a slide frame to a clean pencil-sketch look (black on white)."""
    img  = cv2.resize(frame, (CW, CH), interpolation=cv2.INTER_LANCZOS4)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    if float(np.mean(gray)) < 128:          # auto-invert dark backgrounds
        gray = 255 - gray
    clahe = cv2.createCLAHE(clipLimit=3.0, tileGridSize=(8, 8))
    gray  = clahe.apply(gray)
    inv   = (255 - gray).astype(np.float32)
    blur  = cv2.GaussianBlur(inv, (21, 21), 0).astype(np.float32)
    denom = np.maximum(255.0 - blur, 1.0)
    sk    = np.clip(gray.astype(np.float32) * 256.0 / denom, 0, 255).astype(np.uint8)
    sk[sk > 240] = 255
    sk = cv2.convertScaleAbs(sk, alpha=1.25, beta=-15)
    return cv2.cvtColor(np.clip(sk, 0, 255).astype(np.uint8), cv2.COLOR_GRAY2BGR)


def slide_to_color(frame: np.ndarray) -> np.ndarray:
    """Prepare the full-colour version of a slide for the fill reveal."""
    img = cv2.resize(frame, (CW, CH), interpolation=cv2.INTER_LANCZOS4)
    img = cv2.convertScaleAbs(img, alpha=1.05, beta=8)
    return np.clip(img, 0, 255).astype(np.uint8)


# ---------------------------------------------------------------------------
# Phase 3 — Text row detection  (morphological horizontal-band analysis)
# ---------------------------------------------------------------------------

def detect_text_rows(frame_bgr: np.ndarray) -> List[Tuple[int, int, int, int]]:
    """
    Find horizontal text bands using morphological dilation.

    IMPORTANT: operates on the ORIGINAL colour frame, NOT the sketch.
    The dodge-blend in slide_to_sketch() washes out large bold headings to
    near-white, making them invisible to threshold-based detection.  Working
    directly on the raw frame avoids that artefact entirely.

    Returns list of (x0, y0, x1, y1) sorted top→bottom.
    """
    img  = cv2.resize(frame_bgr, (CW, CH), interpolation=cv2.INTER_AREA)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Auto-invert for dark-background slides
    if float(np.mean(gray)) < 128:
        gray = 255 - gray

    # Plain threshold: ink pixels are darker than 185 (works on any normal slide)
    _, binary = cv2.threshold(gray, 185, 255, cv2.THRESH_BINARY_INV)

    # Strong horizontal dilation → merges individual letters into line-wide blobs
    k      = cv2.getStructuringElement(cv2.MORPH_RECT, (60, 3))
    merged = cv2.dilate(binary, k, iterations=2)

    contours, _ = cv2.findContours(merged, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    rows: List[Tuple[int, int, int, int]] = []
    for c in contours:
        x, y, w, h = cv2.boundingRect(c)
        # Relaxed vs v6: height ≤ 300 (large headlines), aspect ratio ≥ 2.0
        if w >= 80 and 6 <= h <= 300 and (w / max(h, 1)) >= 2.0:
            y0 = max(0,  y - 8)
            y1 = min(CH, y + h + 8)
            rows.append((x, y0, x + w, y1))

    rows.sort(key=lambda r: r[1])   # top → bottom
    return rows


# ---------------------------------------------------------------------------
# Phase 4 — Illustration contour extraction  (text regions masked out)
# ---------------------------------------------------------------------------

def extract_illus_contours(sketch_bgr: np.ndarray,
                            text_rows: List[Tuple[int, int, int, int]],
                            status_cb=None) -> List[List[Tuple[int, int]]]:
    """
    Extract simplified illustration contours from the sketch,
    with all text-row regions blanked out first.
    Returns a flat list of strokes.
    """
    gray = cv2.cvtColor(sketch_bgr, cv2.COLOR_BGR2GRAY)
    _, binary = cv2.threshold(gray, SKETCH_THRESHOLD, 255, cv2.THRESH_BINARY_INV)

    # Blank out text rows so text pixels don't become illustration contours
    text_mask = np.zeros((CH, CW), dtype=np.uint8)
    for x0, y0, x1, y1 in text_rows:
        text_mask[y0:y1, x0:x1] = 255
    k_exp = cv2.getStructuringElement(cv2.MORPH_RECT, (8, 8))
    text_mask = cv2.dilate(text_mask, k_exp, iterations=1)
    binary[text_mask > 0] = 0

    # Slight dilation to reconnect hairline gaps
    k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2, 2))
    binary = cv2.dilate(binary, k, iterations=1)

    contours, _ = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)

    strokes: List[List[Tuple[int, int]]] = []
    for c in contours:
        arc = cv2.arcLength(c, False)
        if arc < 30:
            continue
        eps  = 0.004 * arc
        simp = cv2.approxPolyDP(c, eps, True)
        pts  = [(int(p[0][0]), int(p[0][1])) for p in simp]
        if len(pts) >= 2:
            strokes.append(pts)

    if status_cb and not strokes:
        status_cb("  (no illustration contours found in this slide)")
    return strokes


# ---------------------------------------------------------------------------
# Phase 5 — Cluster illustration strokes by object
# ---------------------------------------------------------------------------

def cluster_illus_strokes(strokes: List[List[Tuple[int, int]]],
                           margin: int = 90) -> List[List[Tuple[int, int]]]:
    """
    Group illustration strokes by spatial proximity so each object is drawn
    completely before moving to the next.
    Within each cluster strokes are sorted top→bottom, left→right.
    """
    if not strokes:
        return []

    def bbox(stroke: List[Tuple[int, int]]) -> Tuple[int, int, int, int]:
        pts = np.array(stroke)
        x0, y0 = pts.min(axis=0)
        x1, y1 = pts.max(axis=0)
        return int(x0), int(y0), int(x1), int(y1)

    n      = len(strokes)
    parent = list(range(n))
    bboxes = [bbox(s) for s in strokes]

    def find(x: int) -> int:
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    def union(a: int, b: int) -> None:
        parent[find(a)] = find(b)

    for i in range(n):
        x0i, y0i, x1i, y1i = bboxes[i]
        for j in range(i + 1, n):
            x0j, y0j, x1j, y1j = bboxes[j]
            if (x0i - margin < x1j and x1i + margin > x0j and
                    y0i - margin < y1j and y1i + margin > y0j):
                union(i, j)

    clusters: Dict[int, List[int]] = {}
    for i in range(n):
        clusters.setdefault(find(i), []).append(i)

    # Sort clusters by topmost-leftmost bounding box
    sorted_clusters = sorted(
        clusters.values(),
        key=lambda ci: (min(bboxes[i][1] for i in ci),
                        min(bboxes[i][0] for i in ci)))

    result: List[List[Tuple[int, int]]] = []
    for ci in sorted_clusters:
        ci.sort(key=lambda i: (bboxes[i][1], bboxes[i][0]))
        for i in ci:
            result.append(strokes[i])
    return result


# ---------------------------------------------------------------------------
# Phase 6 — Build SlideSegment  (pre-computed once per slide)
# ---------------------------------------------------------------------------

def build_sketch_segment(slide: SlideInfo, status_cb=None) -> SlideSegment:
    frame = cv2.imread(slide.frame_path)
    if frame is None:
        frame = np.full((CH, CW, 3), 255, dtype=np.uint8)

    sketch        = slide_to_sketch(frame)
    color         = slide_to_color(frame)
    text_rows     = detect_text_rows(frame)          # ← original frame, not sketch
    illus_raw     = extract_illus_contours(sketch, text_rows, status_cb=status_cb)
    illus_strokes = cluster_illus_strokes(illus_raw)

    if status_cb:
        status_cb(f"  Slide {slide.timestamp:.0f}s–{slide.end_time:.0f}s  "
                  f"→ {len(text_rows)} text rows + {len(illus_strokes)} illus strokes")

    return SlideSegment(
        start=slide.timestamp,
        end=slide.end_time,
        text_rows=text_rows,
        illus_strokes=illus_strokes,
        color_bgr=color,
    )


# ---------------------------------------------------------------------------
# Hand cursor
# ---------------------------------------------------------------------------

def _draw_hand(frame: np.ndarray, x: int, y: int) -> None:
    """
    Draw a realistic human hand holding a marker at drawing tip (x, y).

    Styled after doodle-video reference: right hand entering from the right,
    dorsal (back-of-hand) view, warm skin tone, silver + black marker.
    """
    # Keep pen tip safely on-canvas; leave room for the hand body to the right
    x = max(20,  min(CW - 390, x))
    y = max(80,  min(CH - 130, y))

    # Pen axis: 38° below horizontal, pointing from tip toward wrist
    a   = math.radians(38)
    ca, sa   = math.cos(a), math.sin(a)
    # Perpendicular (90° CCW from axis — "above" the hand)
    cpa, spa = -sa, ca

    def pt(along: float, across: float) -> Tuple[int, int]:
        """Offset from tip: along=distance along pen axis, across=perpendicular."""
        return (int(x + along * ca  + across * cpa),
                int(y + along * sa  + across * spa))

    # ── Skin palette (warm caucasian, BGR) ────────────────────────────
    S_BASE  = (165, 193, 213)   # main dorsal skin
    S_DARK  = (125, 150, 170)   # shadow / edges / creases
    S_LIGHT = (200, 218, 232)   # highlight ridge
    S_NAIL  = (210, 222, 232)   # nail plate

    # ── 1. Soft drop shadow ──────────────────────────────────────────
    ov = frame.copy()
    scx, scy = pt(195, 28)
    cv2.ellipse(ov, (scx, scy), (215, 52),
                math.degrees(a), 0, 360, (65, 65, 65), -1, cv2.LINE_AA)
    cv2.GaussianBlur(ov, (21, 21), 0, ov)
    cv2.addWeighted(ov, 0.20, frame, 0.80, 0, frame)

    # ── 2. Marker / pen ─────────────────────────────────────────────
    # Fine black tip
    cv2.line(frame, (x, y), pt(20, 0),   (12,  12,  12),  7, cv2.LINE_AA)
    # Silver grip section
    cv2.line(frame, pt(20, 0), pt(78, 0), (145, 145, 145), 13, cv2.LINE_AA)
    # Specular highlight on silver
    cv2.line(frame, pt(23, -4), pt(75, -4), (215, 215, 215),  4, cv2.LINE_AA)
    # Dark body after grip
    cv2.line(frame, pt(78, 0), pt(142, 0), (28,  28,  28),  12, cv2.LINE_AA)
    # End cap
    cv2.circle(frame, pt(142, 0), 7, (18, 18, 18), -1, cv2.LINE_AA)

    # ── 3. Knuckle bumps (dorsal view, four fingers) ─────────────────
    for along, across, r in [
        ( 63, -10, 14),   # index
        ( 71,   2, 13),   # middle
        ( 79,  14, 12),   # ring
        ( 87,  26, 11),   # pinky
    ]:
        kx, ky = pt(along, across)
        cv2.circle(frame, (kx, ky), r + 2, S_DARK, -1, cv2.LINE_AA)
        cv2.circle(frame, (kx, ky), r,     S_BASE, -1, cv2.LINE_AA)
        cv2.ellipse(frame, (kx, ky), (max(1, r - 2), 3),
                    math.degrees(a), 0, 180, S_DARK, 1, cv2.LINE_AA)

    # ── 4. Main palm (dorsal silhouette) ─────────────────────────────
    palm_outer = np.array([
        pt( 48, -22), pt( 83, -20), pt( 98,  28),
        pt(183,  52), pt(267,  46), pt(328,  18),
        pt(318, -32), pt(204, -47), pt(113, -37), pt( 58, -30),
    ], dtype=np.int32)
    palm_inner = np.array([
        pt( 51, -19), pt( 85, -17), pt( 96,  25),
        pt(179,  48), pt(262,  42), pt(323,  15),
        pt(313, -29), pt(202, -44), pt(111, -34), pt( 60, -27),
    ], dtype=np.int32)
    cv2.fillPoly(frame, [palm_outer], S_DARK)
    cv2.fillPoly(frame, [palm_inner], S_BASE)

    # Dorsal highlight ridge (light runs down the centre of the hand)
    hl = np.array([
        pt( 83, -15), pt(122, -14), pt(192, -17),
        pt(250, -12), pt(310,  -4), pt(316, -11),
        pt(253, -21), pt(192, -25), pt(122, -23), pt( 83, -23),
    ], dtype=np.int32)
    cv2.fillPoly(frame, [hl], S_LIGHT)

    # ── 5. Thumb ────────────────────────────────────────────────────
    th_outer = np.array([
        pt(60, -30), pt(53, -44), pt(49, -68),
        pt(42, -73), pt(34, -70), pt(30, -54),
        pt(35, -37), pt(46, -27),
    ], dtype=np.int32)
    th_inner = np.array([
        pt(58, -28), pt(51, -43), pt(47, -65),
        pt(41, -70), pt(35, -52), pt(39, -37), pt(48, -29),
    ], dtype=np.int32)
    cv2.fillPoly(frame, [th_outer], S_DARK)
    cv2.fillPoly(frame, [th_inner], S_BASE)
    nail_th = np.array([
        pt(47, -63), pt(50, -69), pt(43, -72), pt(37, -67),
    ], dtype=np.int32)
    cv2.fillPoly(frame, [nail_th], S_NAIL)

    # ── 6. Index fingertip (near pen, partially visible) ─────────────
    idx = np.array([
        pt(56, -22), pt(40, -28), pt(29, -23),
        pt(27, -14), pt(33,  -7), pt(46, -11), pt(56, -16),
    ], dtype=np.int32)
    cv2.fillPoly(frame, [idx], S_BASE)

    # ── 7. Pinky tip (far side) ──────────────────────────────────────
    pk = np.array([
        pt(89, 27), pt(80, 33), pt(73, 35),
        pt(67, 30), pt(67, 19), pt(76, 15), pt(87, 17),
    ], dtype=np.int32)
    cv2.fillPoly(frame, [pk], S_BASE)

    # ── 8. Wrist edge crease lines ───────────────────────────────────
    cv2.line(frame, pt(260, 43), pt(328, 17), S_DARK, 2, cv2.LINE_AA)
    cv2.line(frame, pt(317, -31), pt(206, -46), S_DARK, 2, cv2.LINE_AA)

    # ── 9. Re-draw pen tip on top of fingers ─────────────────────────
    cv2.line(frame, (x, y), pt(20, 0),   (12,  12,  12),  8, cv2.LINE_AA)
    cv2.line(frame, pt(20, 0), pt(66, 0), (145, 145, 145), 13, cv2.LINE_AA)
    cv2.line(frame, pt(23, -4), pt(63, -4), (215, 215, 215),  4, cv2.LINE_AA)
    cv2.circle(frame, (x, y), 3, (0, 0, 0), -1, cv2.LINE_AA)


# ---------------------------------------------------------------------------
# White-out transition
# ---------------------------------------------------------------------------

def _blend_to_white(frame: np.ndarray, fraction: float) -> np.ndarray:
    white = np.full_like(frame, 255)
    return cv2.addWeighted(frame, 1.0 - fraction, white, fraction, 0)


# ---------------------------------------------------------------------------
# Render loop
# ---------------------------------------------------------------------------

def _commit_illus_stroke(base_canvas: np.ndarray,
                          stroke: List[Tuple[int, int]],
                          color_bgr: Optional[np.ndarray]) -> None:
    """
    Draw one illustration stroke on base_canvas with interior colour fill.

    Previously this only coloured the outline stroke path via dilation, leaving
    object interiors white.  Now we use fillPoly so the full enclosed area is
    filled from the original colour frame before the outline is drawn on top.
    """
    pts    = np.array(stroke, dtype=np.int32)
    pts_cv = pts.reshape(-1, 1, 2)

    # 1. Fill interior first (outline drawn on top so it stays crisp)
    if color_bgr is not None and len(stroke) >= 3:
        PAD = 12
        x0c = max(0,  int(pts[:, 0].min()) - PAD)
        y0c = max(0,  int(pts[:, 1].min()) - PAD)
        x1c = min(CW, int(pts[:, 0].max()) + PAD)
        y1c = min(CH, int(pts[:, 1].max()) + PAD)
        if x1c > x0c and y1c > y0c:
            mc   = np.zeros((y1c - y0c, x1c - x0c), dtype=np.uint8)
            lpts = pts.copy()
            lpts[:, 0] -= x0c
            lpts[:, 1] -= y0c
            # fillPoly treats the contour as a closed polygon — fills the interior
            cv2.fillPoly(mc, [lpts.reshape(-1, 1, 2)], 255)
            roi = base_canvas[y0c:y1c, x0c:x1c]
            col = color_bgr[y0c:y1c, x0c:x1c]
            roi[mc > 0] = col[mc > 0]

    # 2. Outline on top
    cv2.polylines(base_canvas, [pts_cv], False, DRAW_COL, LW, cv2.LINE_AA)


def render_to_output(segments: List[SlideSegment],
                     duration: float,
                     fps: float,
                     aac_path: Optional[str],
                     output_path: str,
                     progress_cb=None) -> None:
    """
    Render all slide segments to output MP4 at `fps` fps.

    Drawing order per slide:
      1. Text rows revealed left-to-right (top→bottom row order).
      2. Illustration strokes drawn object-by-object (outline + colour fill).

    Uses incremental base_canvas: only newly-completed elements are written
    each time n_elem advances (O(N) total work).
    """
    fps_r   = round(fps)
    fps_str = str(fps_r)

    cmd = ["ffmpeg", "-y",
           "-f", "rawvideo", "-vcodec", "rawvideo",
           "-s", f"{CW}x{CH}", "-pix_fmt", "bgr24",
           "-r", fps_str, "-i", "pipe:0"]
    if aac_path and os.path.exists(aac_path):
        cmd += ["-i", aac_path,
                "-c:v", "libx264", "-preset", "fast", "-crf", "18",
                "-pix_fmt", "yuv420p",
                "-c:a", "copy", "-shortest",
                output_path]
    else:
        cmd += ["-c:v", "libx264", "-preset", "fast", "-crf", "18",
                "-pix_fmt", "yuv420p",
                output_path]

    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE, stderr=subprocess.PIPE)

    stderr_chunks: list = []

    def _drain() -> None:
        try:
            for chunk in iter(lambda: proc.stderr.read(8192), b""):
                stderr_chunks.append(chunk)
        except Exception:
            pass

    threading.Thread(target=_drain, daemon=True).start()

    total_frames  = int(duration * fps_r) + 1
    seg_idx       = 0
    base_canvas:  Optional[np.ndarray] = None
    base_seg_idx: int = -1
    base_n_full:  int = 0
    # Weighted cumulative timeline — precomputed on slide change
    slide_cum_w:   np.ndarray = np.array([0.0])
    slide_total_w: float      = 0.0

    def _weighted_elem(p: float, n_rows_: int, n_total_: int,
                        cum_w_: np.ndarray, total_w_: float):
        """
        Return (n_elem, elem_frac) using TEXT_WEIGHT-weighted timing.
        Text rows each occupy TEXT_WEIGHT units; illustration strokes 1 unit.
        This prevents text being rushed when there are many illus strokes.
        """
        if n_total_ == 0 or total_w_ == 0:
            return 0, 0.0
        target  = p * total_w_
        n_elem_ = int(np.searchsorted(cum_w_[1:], target, side="right"))
        n_elem_ = min(n_elem_, n_total_)
        if n_elem_ < n_total_:
            w_i       = float(TEXT_WEIGHT if n_elem_ < n_rows_ else 1)
            raw_frac  = float((target - cum_w_[n_elem_]) / w_i)
            elem_frac_ = max(0.0, min(1.0, raw_frac))
        else:
            elem_frac_ = 0.0
        return n_elem_, elem_frac_

    try:
        for fi in range(total_frames):
            t = fi / fps_r

            while seg_idx < len(segments) - 1 and t >= segments[seg_idx].end:
                seg_idx += 1

            seg      = segments[seg_idx]
            n_rows   = len(seg.text_rows)
            n_illus  = len(seg.illus_strokes)
            n_total  = n_rows + n_illus

            dur = max(seg.end - seg.start, 1e-3)
            p   = min(1.0, max(0.0, (t - seg.start) / dur))

            # ---- reset canvas + precompute weights when slide changes ----
            if seg_idx != base_seg_idx:
                base_canvas  = np.full((CH, CW, 3), 255, dtype=np.uint8)
                base_seg_idx = seg_idx
                base_n_full  = 0
                # Precompute weighted cumulative timeline for this slide
                raw_w         = [float(TEXT_WEIGHT)] * n_rows + [1.0] * n_illus
                slide_cum_w   = np.cumsum([0.0] + raw_w, dtype=np.float64)
                slide_total_w = float(slide_cum_w[-1])

            assert base_canvas is not None

            n_elem, elem_frac = _weighted_elem(
                p, n_rows, n_total, slide_cum_w, slide_total_w)

            # ---- commit newly completed elements ----
            if n_elem > base_n_full:
                for i in range(base_n_full, min(n_elem, n_total)):
                    if i < n_rows:
                        # Text row: full wipe reveal from colour original
                        x0, y0, x1, y1 = seg.text_rows[i]
                        if seg.color_bgr is not None:
                            base_canvas[y0:y1, x0:x1] = \
                                seg.color_bgr[y0:y1, x0:x1]
                    else:
                        # Illustration stroke: interior fill + outline
                        ii = i - n_rows
                        _commit_illus_stroke(base_canvas,
                                             seg.illus_strokes[ii],
                                             seg.color_bgr)
                base_n_full = min(n_elem, n_total)

            # ---- compose output frame ----
            # Blank-slide fallback: if nothing detected, show the original slide
            if n_total == 0 and seg.color_bgr is not None:
                frame = seg.color_bgr.copy()
            else:
                frame = base_canvas.copy()

            pen_pos: Optional[Tuple[int, int]] = None

            if n_total > 0 and n_elem < n_total and elem_frac > 0:
                if n_elem < n_rows:
                    # Partial text-row wipe: reveal left→right
                    x0, y0, x1, y1 = seg.text_rows[n_elem]
                    cur_x = int(x0 + elem_frac * (x1 - x0))
                    if cur_x > x0 and seg.color_bgr is not None:
                        frame[y0:y1, x0:cur_x] = \
                            seg.color_bgr[y0:y1, x0:cur_x]
                    pen_pos = (cur_x, (y0 + y1) // 2)
                else:
                    # Partial illustration stroke
                    ii      = n_elem - n_rows
                    stroke  = seg.illus_strokes[ii]
                    n_pts   = max(2, int(elem_frac * len(stroke)))
                    partial = stroke[:n_pts]
                    pts_f   = np.array(partial, dtype=np.int32)
                    if len(pts_f) >= 2:
                        cv2.polylines(frame, [pts_f.reshape(-1, 1, 2)],
                                      False, DRAW_COL, LW, cv2.LINE_AA)
                    pen_pos = partial[-1]

            elif n_elem > 0:
                # All drawn — park hand at last element's endpoint
                last = n_elem - 1
                if last < n_rows:
                    rx0, ry0, rx1, ry1 = seg.text_rows[last]
                    pen_pos = (rx1, (ry0 + ry1) // 2)
                else:
                    ii = last - n_rows
                    if ii < n_illus:
                        pen_pos = seg.illus_strokes[ii][-1]

            if pen_pos:
                _draw_hand(frame, pen_pos[0], pen_pos[1])

            # White-out fade at end of each slide (not the last)
            if seg_idx < len(segments) - 1:
                frames_left = (seg.end - t) * fps_r
                if frames_left < TRANSITION_FRAMES:
                    frac = max(0.0, 1.0 - frames_left / TRANSITION_FRAMES)
                    frame = _blend_to_white(frame, frac)

            try:
                proc.stdin.write(frame.tobytes())
            except (BrokenPipeError, OSError, ValueError):
                break

            if progress_cb and fi % fps_r == 0:
                progress_cb(fi / total_frames)

    finally:
        try:
            proc.stdin.close()
        except (OSError, ValueError, BrokenPipeError):
            pass

    try:
        proc.wait(timeout=600)   # 10 min — covers even long lecture videos
    except subprocess.TimeoutExpired:
        proc.kill()
        proc.wait()

    if proc.returncode not in (0, None):
        err = b"".join(stderr_chunks).decode("utf-8", errors="replace")[-3000:]
        raise RuntimeError("FFmpeg render failed:\n" + err)


# ---------------------------------------------------------------------------
# Orchestrator
# ---------------------------------------------------------------------------

def process_video(input_path: str,
                  sensitivity: float,
                  msg_queue: queue.Queue) -> None:

    tmp = tempfile.mkdtemp(prefix="doodle_")

    def status(m):   msg_queue.put({"type": "status",   "msg": m})
    def progress(v): msg_queue.put({"type": "progress",
                                    "value": max(0.0, min(1.0, v))})

    try:
        status("Probing video…")
        info = probe_video(input_path)
        fps  = info.fps if info.fps > 0 else 30.0
        status(f"Video: {info.duration:.1f}s  {info.width}×{info.height}  {fps:.1f}fps")

        status("Extracting audio…")
        aac, _ = extract_audio_files(input_path, tmp, info)
        # No audio is not fatal — output will be silent

        status(f"Detecting slides (sensitivity={sensitivity:.2f})…")
        try:
            slides = detect_slides(input_path, tmp,
                                   scene_threshold=sensitivity,
                                   status_cb=status)
        except Exception as e:
            raise RuntimeError(f"Slide detection failed: {e}")

        if not slides:
            raise RuntimeError(
                "No slides detected. Try lowering the sensitivity slider.")

        status(f"Found {len(slides)} slide(s). Analysing…")
        progress(0.15)

        segments: List[SlideSegment] = []
        for i, slide in enumerate(slides):
            seg = build_sketch_segment(slide, status_cb=status)
            segments.append(seg)
            progress(0.15 + (i + 1) / len(slides) * 0.30)

        status(f"Ready. Rendering {len(segments)} slide(s) at {fps:.0f}fps…")
        progress(0.45)

        input_p     = Path(input_path)
        output_path = str(input_p.parent / (input_p.stem + "_doodle.mp4"))

        render_to_output(
            segments, info.duration, fps, aac, output_path,
            progress_cb=lambda v: progress(0.45 + v * 0.55),
        )

        progress(1.0)
        status(f"Done!  →  {output_path}")
        msg_queue.put({"type": "done", "output": output_path})

    except Exception as exc:
        msg_queue.put({"type": "error", "msg": str(exc)})
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


# ---------------------------------------------------------------------------
# GUI
# ---------------------------------------------------------------------------

class DoodleApp(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Doodle Whiteboard Animator")
        self.resizable(False, False)
        self.geometry("560x300")
        self._input_path: Optional[str] = None
        self._q: queue.Queue = queue.Queue()
        self._build_ui()
        self._poll()

    def _build_ui(self):
        tk.Label(self, text="Doodle Whiteboard Animator",
                 font=("Helvetica", 16, "bold")).pack(padx=14, pady=6, anchor="w")
        tk.Label(self,
                 text="Converts each slide to a hand-drawn whiteboard animation.",
                 font=("Helvetica", 10), fg="#555").pack(padx=14, pady=(0, 8), anchor="w")

        # File selector
        fr = tk.Frame(self); fr.pack(fill="x", padx=14)
        tk.Button(fr, text="Browse…", command=self._browse).pack(side="left")
        self._file_lbl = tk.Label(fr, text="No file selected",
                                  fg="#888", anchor="w", width=50)
        self._file_lbl.pack(side="left", padx=8)

        # Sensitivity slider
        sf = tk.Frame(self); sf.pack(fill="x", padx=14, pady=(10, 0))
        tk.Label(sf, text="Slide sensitivity:", width=18, anchor="w").pack(side="left")
        self._sensitivity = tk.DoubleVar(value=0.06)
        tk.Scale(sf, from_=0.02, to=0.40, resolution=0.01,
                 orient="horizontal", variable=self._sensitivity,
                 length=200, showvalue=True).pack(side="left", padx=4)
        tk.Label(sf, text="lower → detects more slides",
                 fg="#777", font=("Helvetica", 9)).pack(side="left", padx=4)

        # Progress bar
        self._pb = ttk.Progressbar(self, length=530, mode="determinate")
        self._pb.pack(padx=14, pady=(14, 4))

        # Status label
        self._status = tk.Label(self, text="", fg="#333",
                                font=("Helvetica", 9), anchor="w")
        self._status.pack(padx=14, anchor="w")

        # Go button
        self._btn = tk.Button(
            self, text="Create Doodle Video",
            font=("Helvetica", 11, "bold"),
            bg="#2e7bcf", fg="white", activebackground="#1a5fa3",
            state="disabled", command=self._run, padx=10, pady=4)
        self._btn.pack(pady=(12, 8))

    def _browse(self):
        p = filedialog.askopenfilename(
            title="Select input video",
            filetypes=[("MP4", "*.mp4"), ("Video", "*.mov *.avi *.mkv"),
                       ("All", "*.*")])
        if p:
            self._input_path = p
            name = Path(p).name
            self._file_lbl.config(
                text=(name if len(name) <= 46 else "…" + name[-45:]),
                fg="#222")
            self._btn.config(state="normal")

    def _run(self):
        if not self._input_path:
            return
        self._btn.config(state="disabled")
        self._pb["value"] = 0
        self._status.config(text="Starting…")
        threading.Thread(
            target=process_video,
            args=(self._input_path, self._sensitivity.get(), self._q),
            daemon=True,
        ).start()

    def _poll(self):
        try:
            while True:
                msg = self._q.get_nowait()
                t   = msg.get("type")
                if t == "status":
                    self._status.config(text=msg["msg"])
                elif t == "progress":
                    self._pb["value"] = msg["value"] * 100
                elif t == "done":
                    self._pb["value"] = 100
                    messagebox.showinfo("Done", f"Saved!\n\n{msg['output']}")
                    self._btn.config(state="normal")
                    self._status.config(text="Ready.")
                elif t == "error":
                    messagebox.showerror("Error", msg["msg"])
                    self._btn.config(state="normal")
                    self._status.config(text="Error — see dialog.")
                    self._pb["value"] = 0
        except queue.Empty:
            pass
        self.after(100, self._poll)


# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------

def main():
    try:
        check_ffmpeg()
    except RuntimeError as exc:
        r = tk.Tk(); r.withdraw()
        messagebox.showerror("Missing dependency", str(exc))
        r.destroy()
        return
    DoodleApp().mainloop()


if __name__ == "__main__":
    main()
