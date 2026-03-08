#!/usr/bin/env python3
"""Saasfactor UX Audit Tool — Local Backend"""

import base64
import io
import json
import os
import re
import threading
import time
import uuid
from datetime import datetime

import urllib.request as _urllib_req
from html.parser import HTMLParser

from flask import Flask, Response, jsonify, render_template, request, stream_with_context
from flask_cors import CORS

try:
    from PIL import Image, ImageDraw, ImageFont
    PIL_AVAILABLE = True
except ImportError:
    PIL_AVAILABLE = False
    print("[warn] Pillow not installed — annotation markers disabled")

try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

from openai import OpenAI as _OpenAI

# ─── Setup ────────────────────────────────────────────────────────────────────

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
app = Flask(__name__, template_folder=os.path.join(BASE_DIR, "templates"))
CORS(app)

ANTHROPIC_API_KEY = os.environ.get("ANTHROPIC_API_KEY", "")

def _load_b64(path):
    if os.path.exists(path):
        with open(path, "rb") as f:
            return base64.b64encode(f.read()).decode()
    return ""

LOGO_WHITE_B64 = _load_b64(os.path.join(BASE_DIR, "assets", "logo_white.png"))
LOGO_DARK_B64  = _load_b64(os.path.join(BASE_DIR, "assets", "logo_dark.png"))

sessions: dict = {}
_lock = threading.Lock()

AUDIT_STEPS = [
    "Parsing layout and structure",
    "Identifying UX friction points",
    "Evaluating visual hierarchy",
    "Checking accessibility and clarity",
    "Generating audit report",
]

# ─── Training knowledge base ──────────────────────────────────────────────────

_TRAINING_DIR = os.path.normpath(os.path.join(BASE_DIR, "..", ""))   # Desktop/Claude/

_TRAINING_FILES = {
    "training_dmmt.md":       "Don't Make Me Think — Steve Krug",
    "training_dui.md":        "Designing User Interfaces — Dmytro Malewicz",
    "training_psych.md":      "Psych 101 — Paul Kleinman",
    "training_psydesign.md":  "Psychology of Design: 106 Cognitive Biases",
    "training_pui.md":        "Practical UI",
    "training_refui.md":      "Refactoring UI — Adam Wathan & Steve Schoger",
    "training_uitips.md":     "UI Design Tips",
    "training_100things.md":  "100 More Things Every Designer Needs to Know About People",
    "ux_rules_batch1.md":     "UX Component Rules (Part 1)",
    "ux_rules_batch3.md":     "UX Component Rules (Part 3)",
    "ux_rules_batch4.md":     "UX Component Rules (Part 4)",
    "ux_rules_batch5.md":     "UX Component Rules (Part 5)",
    "training_wcag22.md":     "WCAG 2.2 — Web Content Accessibility Guidelines",
    "training_upd.md":        "Universal Principles of Design — Lidwell, Holden & Butler (200 Principles)",
    "training_doet.md":       "The Design of Everyday Things — Don Norman (Revised Edition)",
}

_PRINCIPLE_PATTERNS = (
    "## ", "### ",
    "**Core idea:**", "**UX implication:**", "**Why it matters:**",
    "**Key fix:**", "**Key principle:**", "**Chapter:**",
    "✅", "❌",
)

def _extract_principles(path, max_chars=8000):
    try:
        with open(path, encoding="utf-8") as f:
            lines = f.read().split("\n")
    except FileNotFoundError:
        return ""
    out = [l.strip() for l in lines
           if l.strip() and any(p in l for p in _PRINCIPLE_PATTERNS)]
    return "\n".join(out)[:max_chars]


def _build_knowledge_base():
    parts = []
    base = os.path.normpath(os.path.join(BASE_DIR, ".."))
    for fname, label in _TRAINING_FILES.items():
        path = os.path.join(base, fname)
        content = _extract_principles(path)
        if content:
            parts.append(f"\n\n=== SOURCE: {label} ===\n{content}")
    kb = "".join(parts)
    print(f"[info] Knowledge base: {len(parts)} sources, {len(kb):,} chars "
          f"(~{len(kb)//4:,} tokens)")
    return kb

KNOWLEDGE_BASE = _build_knowledge_base()


AUDIT_PROMPT = """You are a senior UX and accessibility auditor. You have been trained on the Saasfactor UX curriculum AND the WCAG 2.2 accessibility guidelines.
The training knowledge base is provided above. Use it to ground every finding.

Analyze the UI screenshot below carefully. Produce a unified list of 7–10 findings that covers BOTH UX issues (usability, hierarchy, clarity, psychology) AND accessibility violations (WCAG 2.2 Level A/AA). Do NOT separate them — accessibility issues appear inline alongside UX issues in the same list, ordered by severity.

For any finding that also violates a WCAG 2.2 criterion, add "wcag_criterion" and "wcag_level" fields to that issue. Pure UX issues that have no WCAG violation should omit those fields.

Return ONLY a valid JSON object — no markdown fences, no explanation, no extra text:
{
  "screen_name": "Short descriptive screen name (e.g. Dashboard, Login, Onboarding Step 2)",
  "product_description": "Exactly 2 sentences: what this product/company does and who it serves, written from the perspective of the audit reader. Base this on the website context provided. If no website context was given, infer from the screenshot.",
  "overall_score": 7.2,
  "score_label": "Good",
  "summary": "2-3 sentence executive summary of the UX quality and main themes",
  "accessibility_score": 6.0,
  "issues": [
    {
      "id": "01",
      "title": "Short descriptive issue title",
      "severity": "High",
      "location": "Specific UI element visible in the screenshot",
      "problem": "2-3 sentence synopsis: what is wrong and how it directly hurts the user",
      "critical_reason": "1-2 sentences: the psychological or cognitive principle that makes this a critical issue, citing the specific training source",
      "recommendation": "2-3 sentences: concrete actionable fix with implementation specifics",
      "reference": "Nielsen's Heuristic #1: Visibility of System Status",
      "wcag_criterion": "1.4.3",
      "wcag_level": "AA",
      "annotation": {"x": 75, "y": 20, "w": 35, "h": 10}
    },
    {
      "id": "02",
      "title": "Pure UX issue — no WCAG violation",
      "severity": "Medium",
      "location": "Navigation bar",
      "problem": "...",
      "critical_reason": "...",
      "recommendation": "...",
      "reference": "...",
      "annotation": {"x": 50, "y": 5, "w": 80, "h": 8}
    }
  ]
}

Rules:
- overall_score: 0–10 (one decimal). score_label: Poor / Fair / Good / Strong.
- accessibility_score: 0–10 (one decimal) reflecting overall WCAG 2.2 compliance from what is visible.
- severity: High / Medium / Low only. Order issues by severity (High first).
- Include at least 3 issues that are WCAG 2.2 violations (with wcag_criterion + wcag_level). The rest are pure UX findings.
- wcag_criterion: the WCAG 2.2 success criterion number (e.g. "1.4.3", "2.4.7", "1.1.1"). Only include if there is a real WCAG violation.
- wcag_level: "A" or "AA" only. Only include alongside wcag_criterion.
- problem: MAX 3 sentences. State what is wrong and the direct UX/accessibility impact.
- critical_reason: MAX 2 sentences. Explain WHY this matters using a specific psychological or
  cognitive science principle from the training data (e.g. cognitive load, Hick's Law,
  Gestalt, working memory, loss aversion). Must cite the source. For WCAG issues, name the exact criterion violated.
- recommendation: MAX 3 sentences. Be concrete and actionable.
- reference: cite the EXACT book title and specific principle/chapter/rule from the training knowledge
  base above. For WCAG issues, reference the WCAG 2.2 guideline. Examples:
  "Don't Make Me Think (Krug) — Billboard Design 101: users scan, not read",
  "Refactoring UI — Use color to support hierarchy, not communicate it alone",
  "Designing User Interfaces (Malewicz) — Contrast and visual hierarchy",
  "Psychology of Design — Hick's Law: too many choices slows decisions",
  "Practical UI — Spacing consistency: use a spacing scale",
  "Psych 101 (Kleinman) — Gestalt: Law of Proximity",
  "WCAG 2.2 — 1.4.3 Contrast Minimum (AA): normal text requires 4.5:1 contrast ratio",
  "WCAG 2.2 — 2.4.7 Focus Visible (AA): keyboard focus indicator must be visible",
  "Universal Principles of Design — Aesthetic-Usability Effect: beautiful things are perceived as easier to use",
  "Universal Principles of Design — Fitts' Law: larger and closer targets are faster to click",
  "Universal Principles of Design — Progressive Disclosure: show only what is needed at each step",
  "Universal Principles of Design — Signal-to-Noise Ratio: maximise relevant information, minimise clutter",
  "Universal Principles of Design — Visibility: system status and available actions must be visible",
  "The Design of Everyday Things (Norman) — Affordance: element must communicate how it is used",
  "The Design of Everyday Things (Norman) — Signifier: visible cues must indicate where to act",
  "The Design of Everyday Things (Norman) — Gulf of Execution: user cannot figure out how to do what they want",
  "The Design of Everyday Things (Norman) — Gulf of Evaluation: user cannot tell if their action worked",
  "The Design of Everyday Things (Norman) — Feedback: every action must produce an immediate, clear response",
  "The Design of Everyday Things (Norman) — Forcing Function: prevent irreversible actions with confirmation"
- Focus on visually detectable accessibility issues: contrast ratios, color-only information, missing labels,
  touch target sizes, focus indicator absence, images of text, heading structure, icon-only buttons,
  placeholder-only form fields, error states without text labels.
- annotation: approximate center of the issue on the screenshot as percentages (x=0 left, x=100 right,
  y=0 top, y=100 bottom). w and h are width/height as percentages.
  Be specific — do not default to x=50, y=50 for all issues.
"""

REDESIGN_HTML_PROMPT = """Based on the UX audit findings above, redesign this UI to fix ALL identified issues.

Design system — AlignUI + shadcn/ui:
- Font: Inter (include via Google Fonts link tag)
- Colors: primary #0066FF, background #FAFAFA, card #FFFFFF, border #E5E7EB
- Text: foreground #0A0A0A, muted #737373
- Success #16A34A / light #DCFCE7, Warning #CA8A04 / light #FEF9C3, Danger #DC2626 / light #FEE2E2
- Border-radius: 6px (cards 8px), shadows: 0 1px 3px rgba(0,0,0,.08)
- Components: Cards (1px border + shadow), Badges (rounded-full pill), Buttons (primary/secondary/outline/ghost),
  Alert variants (info/success/warning/danger), Stats grid, Accordion (border + chevron), Tables (thead: #F3F4F6)

Apply EVERY recommendation from the audit issues list. Each fix must be visibly implemented.

LAYOUT REQUIREMENTS — CRITICAL, DO NOT SKIP:
- html and body must have: margin:0; padding:0; height:100%; box-sizing:border-box
- If the screen has a sidebar: the root wrapper uses display:flex; flex-direction:row; height:100vh
  The sidebar is a fixed-width column. The right side is display:flex; flex-direction:column; flex:1; overflow:hidden
- If the screen has a top navigation: it is position:sticky or static at the top inside the right column
- The MAIN CONTENT AREA must be: flex:1; overflow-y:auto; padding:24px (or similar)
- NEVER set display:none, visibility:hidden, height:0, or overflow:hidden on the main content area or any of its parent containers
- ALL content sections visible in the original screenshot (tables, cards, forms, stats, lists, etc.) must be fully rendered in the main content area with realistic placeholder data
- Do not stop at navigation — the entire screen must be redesigned including every content section below the nav

Output ONLY a complete self-contained HTML file. Embed ALL CSS in a <style> tag (no external CSS files).
Include Inter via Google Fonts link tag. Must render correctly as a standalone HTML file.
Start your response directly with <!DOCTYPE html> — no preamble or explanation."""

FIGMA_JSON_PROMPT = """Based on the UX audit findings and redesign above, output a Figma plugin JSON spec.

Output ONLY a valid JSON object with this schema — no explanation, no markdown fences:
{
  "meta": { "title": string, "version": "1.0" },
  "canvas": { "bg": "#FAFAFA", "w": 1440, "h": 900 },
  "layout": "sidebar" | "full",
  "header": { "title": string, "subtitle": string },
  "sidebar": { "groups": [{ "label": string, "items": [{ "label": string, "active": boolean }] }] },
  "main": { "padding": 40, "sections": [...] }
}
Available section types: pageHeader, textSection, accordion, hero, stats, alert, table, cardGrid, list,
heading, infoBox, cta, keyValue, divider, badgeRow, twoColumn, principle
Use real content from the redesign. Only include sections present in the actual UI.
Start your response directly with { — no preamble."""

# ─── Website context fetcher ──────────────────────────────────────────────────

def _fetch_website_context(url):
    try:
        if not url.startswith(("http://", "https://")):
            url = "https://" + url
        req = _urllib_req.Request(url, headers={"User-Agent": "Mozilla/5.0 (compatible; UXAudit/1.0)"})
        with _urllib_req.urlopen(req, timeout=8) as resp:
            raw = resp.read(150_000).decode("utf-8", errors="ignore")

        class _Stripper(HTMLParser):
            def __init__(self):
                super().__init__()
                self.parts = []
                self._skip = False
            def handle_starttag(self, tag, _):
                if tag in ("script", "style", "nav", "footer", "head"):
                    self._skip = True
            def handle_endtag(self, tag):
                if tag in ("script", "style", "nav", "footer", "head"):
                    self._skip = False
            def handle_data(self, data):
                if not self._skip:
                    s = data.strip()
                    if len(s) > 3:
                        self.parts.append(s)

        p = _Stripper()
        p.feed(raw)
        text = " ".join(p.parts)
        print(f"[info] Website context fetched: {len(text)} chars from {url}")
        return text[:3000]
    except Exception as e:
        print(f"[warn] Could not fetch website {url}: {e}")
        return ""


# ─── Routes ───────────────────────────────────────────────────────────────────

@app.route("/")
def index():
    return render_template("index.html", logo_dark=LOGO_DARK_B64, logo_white=LOGO_WHITE_B64)


@app.route("/api/health")
def health():
    return jsonify({"ok": True})


@app.route("/api/upload", methods=["POST"])
def upload():
    try:
        if "file" not in request.files:
            return jsonify({"error": "No file provided"}), 400
        f = request.files["file"]
        if not f.filename:
            return jsonify({"error": "No file selected"}), 400

        allowed = {"image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"}
        media_type = f.content_type or "image/jpeg"
        if media_type == "image/jpg":
            media_type = "image/jpeg"
        if media_type not in allowed:
            return jsonify({"error": "Only PNG, JPG, or WebP images are supported"}), 400

        data = f.read()
        if len(data) > 20 * 1024 * 1024:
            return jsonify({"error": "Image must be under 20 MB"}), 400

        website_url     = request.form.get("website_url", "").strip()
        website_context = _fetch_website_context(website_url) if website_url else ""

        sid = str(uuid.uuid4())
        with _lock:
            sessions[sid] = {
                "image_b64":       base64.b64encode(data).decode(),
                "annotated_b64":   None,
                "media_type":      media_type,
                "filename":        f.filename,
                "status":          "uploaded",
                "analysis":        None,
                "website_url":     website_url,
                "website_context": website_context,
                "redesign_html":   None,
                "figma_json":      None,
                "redesign_status": "pending",
            }
        return jsonify({"session_id": sid})
    except Exception as exc:
        return jsonify({"error": f"Upload failed: {exc}"}), 500


@app.route("/api/audit/<sid>")
def audit_stream(sid):
    if sid not in sessions:
        return jsonify({"error": "Session not found"}), 404

    session = sessions[sid]
    if session["status"] == "ready":
        def _done():
            yield f"data: {json.dumps({'type': 'complete'})}\n\n"
        return Response(stream_with_context(_done()), mimetype="text/event-stream",
                        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"})

    def _generate():
        result_box = [None]
        error_box  = [None]
        done_evt   = threading.Event()

        def _run():
            try:
                if not ANTHROPIC_API_KEY:
                    raise ValueError("ANTHROPIC_API_KEY is not set")
                client = _OpenAI(api_key=ANTHROPIC_API_KEY, base_url="https://openrouter.ai/api/v1")

                # Build user message content
                user_content = []
                if session.get("website_context"):
                    user_content.append({
                        "type": "text",
                        "text": (
                            "=== PRODUCT WEBSITE CONTEXT ===\n"
                            f"Website URL: {session.get('website_url', '')}\n"
                            "The following text was extracted from the product's homepage. "
                            "Use it to understand what the product is, who it serves, and "
                            "tailor every finding to their specific context.\n\n"
                            + session["website_context"] + "\n\n"
                        ),
                    })
                user_content.append({"type": "text", "text": "=== UI SCREENSHOT TO AUDIT ==="})
                user_content.append({
                    "type": "image_url",
                    "image_url": {"url": f"data:{session['media_type']};base64,{session['image_b64']}"},
                })
                user_content.append({"type": "text", "text": AUDIT_PROMPT})

                messages = [{"role": "user", "content": user_content}]

                # Retry up to 2 times on overload
                last_exc = None
                for attempt in range(2):
                    try:
                        msg = client.chat.completions.create(
                            model="anthropic/claude-sonnet-4-6",
                            max_tokens=8192,
                            messages=messages,
                            timeout=90,
                        )
                        result_box[0] = msg.choices[0].message.content
                        return
                    except Exception as exc:
                        last_exc = exc
                        err_str = str(exc)
                        print(f"[api] Error (attempt {attempt+1}/2): {err_str[:200]}")
                        if any(k in err_str.lower() for k in ("502", "bad gateway", "529", "overload", "rate limit", "too many")):
                            wait = 8 * (attempt + 1)
                            print(f"[retry] API busy, waiting {wait}s")
                            time.sleep(wait)
                        else:
                            raise
                raise last_exc
            except Exception as exc:
                error_box[0] = str(exc)
            finally:
                done_evt.set()

        thread = threading.Thread(target=_run, daemon=True)
        thread.start()

        # Steps 0–3 have minimum durations; step 4 holds active until the API call finishes
        step_min_durations = [4.0, 5.0, 5.0, 4.5]

        def evt(data):
            return f"data: {json.dumps(data)}\n\n"

        yield evt({"type": "step", "step": 0, "status": "active", "label": AUDIT_STEPS[0]})

        for i, dur in enumerate(step_min_durations):
            waited = 0.0
            while waited < dur:
                time.sleep(0.3)
                waited += 0.3
            yield evt({"type": "step", "step": i, "status": "done", "label": AUDIT_STEPS[i]})
            yield evt({"type": "step", "step": i + 1, "status": "active", "label": AUDIT_STEPS[i + 1]})

        # Step 4 spinner stays on until the API call completes.
        # Hard ceiling of 120 s — after that, force an error rather than spin forever.
        elapsed = 0
        while not done_evt.wait(timeout=2.0):
            elapsed += 2
            if elapsed >= 120:
                error_box[0] = "Analysis timed out after 2 minutes. Please try again."
                done_evt.set()
                break
            yield ": keepalive\n\n"

        if error_box[0]:
            msg = error_box[0]
            if "529" in msg or "overloaded" in msg.lower():
                msg = "The AI service is currently overloaded. Please wait 30 seconds and try again."
            yield evt({"type": "error", "message": msg})
            return
        if not result_box[0]:
            yield evt({"type": "error", "message": "Analysis timed out. Please try again."})
            return

        try:
            text = result_box[0].strip()
            text = re.sub(r"^```(?:json)?\s*", "", text)
            text = re.sub(r"\s*```$", "", text)
            analysis = json.loads(text)

            issues = analysis.get("issues", [])

            # Annotate the image with numbered markers
            ann_b64, ann_type = annotate_image(
                session["image_b64"], session["media_type"], issues
            )

            with _lock:
                sessions[sid]["analysis"]      = analysis
                sessions[sid]["annotated_b64"] = ann_b64
                sessions[sid]["ann_type"]      = ann_type
                sessions[sid]["status"]        = "ready"

            h = sum(1 for x in issues if x.get("severity") == "High")
            m = sum(1 for x in issues if x.get("severity") == "Medium")
            l = sum(1 for x in issues if x.get("severity") == "Low")

            yield evt({"type": "step", "step": 4, "status": "done", "label": AUDIT_STEPS[4]})
            yield evt({
                "type":        "complete",
                "score":       analysis.get("overall_score", 0),
                "score_label": analysis.get("score_label", ""),
                "screen_name": analysis.get("screen_name", ""),
                "summary":     analysis.get("summary", ""),
                "high": h, "medium": m, "low": l,
            })
        except json.JSONDecodeError as exc:
            # Try to recover truncated JSON by finding the last complete issue object
            try:
                last_bracket = text.rfind(']', 0, text.find('"issues"') + 1000 if '"issues"' in text else len(text))
                # Find the last valid complete JSON object boundary before truncation
                fixed = re.sub(r',\s*\{[^}]*$', '', text)  # remove last incomplete object
                fixed = re.sub(r',\s*"[^"]*$', '', fixed)   # remove trailing incomplete key
                fixed = re.sub(r'\s*$', '', fixed)
                # Close any open arrays/objects
                open_braces = fixed.count('{') - fixed.count('}')
                open_brackets = fixed.count('[') - fixed.count(']')
                fixed += ']' * open_brackets + '}' * open_braces
                analysis = json.loads(fixed)
                issues = analysis.get("issues", [])
                ann_b64, ann_type = annotate_image(
                    session.get("image_b64", ""),
                    session.get("image_type", "image/png"),
                    issues,
                )
                h = sum(1 for i in issues if i.get("severity") == "high")
                m = sum(1 for i in issues if i.get("severity") == "medium")
                l = sum(1 for i in issues if i.get("severity") == "low")
                sessions[sid].update({
                    "issues": issues, "annotated_b64": ann_b64, "annotated_type": ann_type,
                    "screen_name": analysis.get("screen_name", ""),
                    "summary":     analysis.get("summary", ""),
                    "high": h, "medium": m, "low": l,
                })
            except Exception:
                yield evt({"type": "error", "message": f"Could not parse analysis: {exc}"})

    return Response(
        stream_with_context(_generate()),
        mimetype="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no", "Connection": "keep-alive"},
    )


@app.route("/api/download/<sid>", methods=["POST"])
def download_report(sid):
    if sid not in sessions:
        return jsonify({"error": "Session not found"}), 404
    session = sessions[sid]
    if session["status"] != "ready" or not session["analysis"]:
        return jsonify({"error": "Report not ready yet"}), 400

    data = request.get_json(force=True) or {}
    email = data.get("email", "").strip()
    name  = data.get("name", "").strip()
    site  = session.get("website_url", "")

    if not email or not re.match(r"^[^\s@]+@[^\s@]+\.[^\s@]+$", email):
        return jsonify({"error": "Please enter a valid email address"}), 400

    # Log the lead
    _log_lead(email, name, site, session["analysis"].get("screen_name", "Unknown"))

    # Use annotated image if available, fall back to original
    img_b64  = session.get("annotated_b64") or session["image_b64"]
    img_type = session.get("ann_type") or session["media_type"]

    html = _build_report(session["analysis"], img_b64, img_type, name, site)

    slug  = re.sub(r"[^\w\-]", "_", session["analysis"].get("screen_name", "screen").lower())
    fname = f"ux_audit_{slug}_{datetime.utcnow().strftime('%Y%m%d')}.html"

    return Response(
        html,
        mimetype="text/html; charset=utf-8",
        headers={"Content-Disposition": f'attachment; filename="{fname}"'},
    )


# ─── Redesign generation ──────────────────────────────────────────────────────

@app.route("/api/redesign/<sid>")
def redesign_stream(sid):
    if sid not in sessions:
        return jsonify({"error": "Session not found"}), 404

    session = sessions[sid]

    # Already done — send immediate complete
    if session.get("redesign_status") == "ready":
        def _already_done():
            yield f"data: {json.dumps({'type': 'complete'})}\n\n"
        return Response(stream_with_context(_already_done()), mimetype="text/event-stream",
                        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"})

    def _generate():
        result_box = [None]
        error_box  = [None]
        done_evt   = threading.Event()

        def _run():
            try:
                if not ANTHROPIC_API_KEY:
                    raise ValueError("ANTHROPIC_API_KEY is not set. Add it to your .env file.")
                if not session.get("analysis"):
                    raise ValueError("Audit analysis not found. Please run the audit first.")
                client = _OpenAI(api_key=ANTHROPIC_API_KEY, base_url="https://openrouter.ai/api/v1")
                analysis_text = json.dumps(session["analysis"], indent=2)

                base_content = [
                    {"type": "text",
                     "text": f"=== UX AUDIT FINDINGS ===\n{analysis_text}\n\n=== ORIGINAL SCREENSHOT ==="},
                    {
                        "type": "image_url",
                        "image_url": {"url": f"data:{session['media_type']};base64,{session['image_b64']}"},
                    },
                ]

                def _call(messages, max_tok, label):
                    for attempt in range(2):
                        try:
                            msg = client.chat.completions.create(
                                model="anthropic/claude-sonnet-4-6",
                                max_tokens=max_tok,
                                messages=messages,
                                timeout=300,
                            )
                            text = msg.choices[0].message.content
                            print(f"[redesign] {label} returned {len(text)} chars")
                            return text
                        except Exception as exc:
                            err_str = str(exc)
                            print(f"[redesign] {label} error (attempt {attempt+1}/2): {err_str[:200]}")
                            if attempt == 0 and any(k in err_str.lower() for k in
                                                    ("502", "bad gateway", "529", "overload", "rate")):
                                time.sleep(10)
                            else:
                                raise
                    raise RuntimeError(f"{label} failed after retries")

                # Call 1 — redesigned HTML
                html_text = _call(
                    [{"role": "user", "content": base_content + [{"type": "text", "text": REDESIGN_HTML_PROMPT}]}],
                    max_tok=10000, label="HTML",
                )

                # Call 2 — Figma JSON (reuse the conversation so Claude knows what it designed)
                figma_text = _call(
                    [
                        {"role": "user", "content": base_content + [{"type": "text", "text": REDESIGN_HTML_PROMPT}]},
                        {"role": "assistant", "content": html_text},
                        {"role": "user",     "content": FIGMA_JSON_PROMPT},
                    ],
                    max_tok=4000, label="Figma JSON",
                )

                result_box[0] = (html_text, figma_text)
            except Exception as exc:
                print(f"[redesign] Failed: {exc}")
                error_box[0] = str(exc)
            finally:
                done_evt.set()

        threading.Thread(target=_run, daemon=True).start()

        def evt(data):
            return f"data: {json.dumps(data)}\n\n"

        yield evt({"type": "progress", "label": "Generating redesign & Figma spec…"})

        elapsed = 0
        while not done_evt.wait(timeout=2.0):
            elapsed += 2
            if elapsed >= 420:
                error_box[0] = "Redesign timed out after 7 minutes."
                done_evt.set()
                break
            yield ": keepalive\n\n"

        if error_box[0]:
            yield evt({"type": "error", "message": error_box[0]})
            return
        if not result_box[0]:
            yield evt({"type": "error", "message": "Redesign generation returned empty response."})
            return

        html_text, figma_text = result_box[0]

        # Strip any markdown fences from JSON response
        figma_clean = re.sub(r'^```(?:json)?\s*', '', figma_text.strip(), flags=re.MULTILINE)
        figma_clean = re.sub(r'\s*```$', '', figma_clean.strip())

        print(f"[redesign] HTML: {len(html_text)} chars, Figma JSON: {len(figma_clean)} chars")

        if not html_text:
            yield evt({"type": "error", "message": "Claude did not return redesigned HTML. Please try again."})
            return

        with _lock:
            sessions[sid]["redesign_html"]   = html_text
            sessions[sid]["figma_json"]      = figma_clean
            sessions[sid]["redesign_status"] = "ready"

        yield evt({"type": "complete"})

    return Response(
        stream_with_context(_generate()),
        mimetype="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no", "Connection": "keep-alive"},
    )


@app.route("/api/preview-redesign/<sid>")
def preview_redesign(sid):
    if sid not in sessions:
        return jsonify({"error": "Session not found"}), 404
    s = sessions[sid]
    if s.get("redesign_status") != "ready" or not s.get("redesign_html"):
        return jsonify({"error": "Redesign not ready yet"}), 400
    return Response(s["redesign_html"], mimetype="text/html; charset=utf-8")


@app.route("/api/download-redesign/<sid>")
def download_redesign(sid):
    if sid not in sessions:
        return jsonify({"error": "Session not found"}), 404
    s = sessions[sid]
    if s.get("redesign_status") != "ready" or not s.get("redesign_html"):
        return jsonify({"error": "Redesign not ready yet"}), 400
    screen = s.get("analysis", {}).get("screen_name", "screen")
    slug   = re.sub(r"[^\w\-]", "_", screen.lower())
    fname  = f"redesign_{slug}_{datetime.utcnow().strftime('%Y%m%d')}.html"
    return Response(
        s["redesign_html"],
        mimetype="text/html; charset=utf-8",
        headers={"Content-Disposition": f'attachment; filename="{fname}"'},
    )


@app.route("/api/download-figma/<sid>")
def download_figma(sid):
    if sid not in sessions:
        return jsonify({"error": "Session not found"}), 404
    s = sessions[sid]
    if s.get("redesign_status") != "ready" or not s.get("figma_json"):
        return jsonify({"error": "Figma spec not ready yet"}), 400
    screen = s.get("analysis", {}).get("screen_name", "screen")
    slug   = re.sub(r"[^\w\-]", "_", screen.lower())
    fname  = f"figma_{slug}_{datetime.utcnow().strftime('%Y%m%d')}.json"
    return Response(
        s["figma_json"],
        mimetype="application/json; charset=utf-8",
        headers={"Content-Disposition": f'attachment; filename="{fname}"'},
    )


# ─── Image annotation ─────────────────────────────────────────────────────────

def annotate_image(image_b64, media_type, issues):
    """Draw numbered severity-coloured markers on the screenshot."""
    if not PIL_AVAILABLE or not issues:
        return image_b64, media_type
    try:
        img = Image.open(io.BytesIO(base64.b64decode(image_b64))).convert("RGBA")
        w, h = img.size
        overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
        draw    = ImageDraw.Draw(overlay)

        SEV = {
            "High":   (220, 38,  38),
            "Medium": (217, 119,  6),
            "Low":    (107, 114, 128),
        }

        r         = max(22, min(w, h) // 32)
        font_size = max(14, r - 6)
        font      = _load_font(font_size)

        for iss in issues:
            ann = iss.get("annotation")
            if not ann:
                continue
            color = SEV.get(iss.get("severity", "Low"), SEV["Low"])
            cx = int(w * max(0, min(100, ann.get("x", 50))) / 100)
            cy = int(h * max(0, min(100, ann.get("y", 50))) / 100)
            cx = max(r + 2, min(w - r - 2, cx))
            cy = max(r + 2, min(h - r - 2, cy))

            # Highlight rectangle
            aw, ah = ann.get("w", 0), ann.get("h", 0)
            if aw > 0 and ah > 0:
                rw, rh = int(w * aw / 100), int(h * ah / 100)
                rx1, ry1 = max(0, cx - rw // 2), max(0, cy - rh // 2)
                rx2, ry2 = min(w, cx + rw // 2), min(h, cy + rh // 2)
                draw.rectangle(
                    [rx1, ry1, rx2, ry2],
                    fill=color + (28,),
                    outline=color + (180,),
                    width=max(2, r // 10),
                )

            # Numbered circle
            draw.ellipse(
                [cx - r, cy - r, cx + r, cy + r],
                fill=color + (225,),
                outline=(255, 255, 255, 220),
                width=max(2, r // 9),
            )
            label = str(iss.get("id", "?"))
            try:
                bbox = draw.textbbox((0, 0), label, font=font)
                tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
            except AttributeError:
                tw, th = font.getsize(label)
            draw.text((cx - tw // 2, cy - th // 2), label,
                      fill=(255, 255, 255, 255), font=font)

        result = Image.alpha_composite(img, overlay).convert("RGB")
        out = io.BytesIO()
        result.save(out, format="PNG", optimize=True)
        out.seek(0)
        return base64.b64encode(out.read()).decode(), "image/png"
    except Exception as exc:
        print(f"[annotate_image] {exc}")
        return image_b64, media_type


def _load_font(size):
    paths = [
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/Arial.ttf",
        "/Library/Fonts/Arial.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    ]
    for p in paths:
        try:
            return ImageFont.truetype(p, size)
        except Exception:
            continue
    try:
        return ImageFont.load_default(size=size)
    except Exception:
        return ImageFont.load_default()


# ─── Lead logger ──────────────────────────────────────────────────────────────

LEADS_CSV_PATH = os.path.join(
    os.path.expanduser("~"),
    "Library", "CloudStorage",
    "GoogleDrive-mafruh@saasfactor.co",
    "My Drive", "UX Audit Leads.csv",
)
_CSV_HEADERS = ["Timestamp", "Email", "Name", "Website", "Screen"]


def _log_lead(email, name, website, screen_name):
    """Append one row to UX Audit Leads.csv in Google Drive (auto-syncs to Sheets)."""
    import csv
    timestamp = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")
    row = [timestamp, email, name or "", website or "", screen_name or ""]
    try:
        file_exists = os.path.isfile(LEADS_CSV_PATH)
        with open(LEADS_CSV_PATH, "a", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            if not file_exists:
                writer.writerow(_CSV_HEADERS)
            writer.writerow(row)
        print(f"[lead_log] Saved: {email}")
    except Exception as exc:
        print(f"[lead_log] {exc}")


# ─── Report builder ───────────────────────────────────────────────────────────

_SEV_COLORS = {
    "High":   ("#FEE2E2", "#DC2626", "#DC2626"),
    "Medium": ("#FEF3C7", "#D97706", "#F59E0B"),
    "Low":    ("#F3F4F6", "#6B7280", "#9CA3AF"),
}

def _badge(sev):
    bg, fg, _ = _SEV_COLORS.get(sev, _SEV_COLORS["Low"])
    return (
        f'<span style="background:{bg};color:{fg};font-size:10px;font-weight:700;'
        f'letter-spacing:.06em;text-transform:uppercase;padding:3px 9px;border-radius:20px;">'
        f'{sev}</span>'
    )


def _wcag_badge(level):
    colors = {"A": ("#DBEAFE", "#1D4ED8"), "AA": ("#EDE9FE", "#6D28D9")}
    bg, fg = colors.get(level, ("#F3F4F6", "#6B7280"))
    return (
        f'<span style="background:{bg};color:{fg};font-size:9px;font-weight:800;'
        f'letter-spacing:.08em;text-transform:uppercase;padding:2px 7px;border-radius:20px;'
        f'margin-left:6px;">WCAG {level}</span>'
    )


def _build_report(analysis, image_b64, media_type, user_name, user_website):
    issues               = analysis.get("issues", [])
    accessibility        = analysis.get("accessibility", [])
    score                = analysis.get("overall_score", 0)
    score_label          = analysis.get("score_label", "")
    accessibility_score  = analysis.get("accessibility_score", None)
    screen_name          = analysis.get("screen_name", "Screen")
    summary              = analysis.get("summary", "")
    product_description  = analysis.get("product_description", "")
    today                = datetime.utcnow().strftime("%B %d, %Y")

    h = sum(1 for i in issues if i.get("severity") == "High")
    m = sum(1 for i in issues if i.get("severity") == "Medium")
    l = sum(1 for i in issues if i.get("severity") == "Low")
    total_issues = max(1, len(issues))

    white_src = f"data:image/png;base64,{LOGO_WHITE_B64}" if LOGO_WHITE_B64 else ""
    img_src   = f"data:{media_type};base64,{image_b64}"

    logo_white_tag = (
        f'<img src="{white_src}" alt="Saasfactor" style="height:30px;display:block;">'
        if white_src else
        '<span style="color:#fff;font-weight:700;font-size:16px;">Saasfactor</span>'
    )

    # SVG score ring — r=38, circumference ≈ 238.76
    circ = 238.76
    ring_target = circ * (1.0 - score / 10.0)
    score_ring_svg = (
        f'<svg width="90" height="90" viewBox="0 0 90 90" style="display:block;margin:0 auto 8px;">'
        f'<circle cx="45" cy="45" r="38" fill="none" stroke="#F3F4F6" stroke-width="7"/>'
        f'<circle cx="45" cy="45" r="38" fill="none" stroke="#F05023" stroke-width="7"'
        f' stroke-linecap="round" transform="rotate(-90 45 45)"'
        f' stroke-dasharray="{circ:.2f}" stroke-dashoffset="{circ:.2f}"'
        f' class="score-ring" data-target="{ring_target:.2f}"/>'
        f'<text x="45" y="43" text-anchor="middle" dominant-baseline="middle"'
        f' font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800"'
        f' fill="#1A1A1A" class="count-num" data-value="{score}" data-decimals="1">{score}</text>'
        f'<text x="45" y="57" text-anchor="middle" font-family="Inter,system-ui,sans-serif"'
        f' font-size="9" fill="#9CA3AF">/10</text>'
        f'</svg>'
    )

    # Severity breakdown bars
    sev_bar_section = (
        f'<div style="margin-top:20px;padding-top:20px;border-top:1px solid #F3F4F6;">'
        f'<div style="font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;'
        f'color:#9CA3AF;margin-bottom:12px;">Severity Breakdown</div>'
        f'<div style="display:flex;flex-direction:column;gap:8px;">'
        f'<div style="display:flex;align-items:center;gap:10px;">'
        f'<div style="font-size:11px;font-weight:600;color:#DC2626;width:38px;">High</div>'
        f'<div style="flex:1;background:#FEE2E2;border-radius:4px;height:8px;overflow:hidden;">'
        f'<div class="sev-bar-fill" data-width="{h/total_issues*100:.1f}%"'
        f' style="height:8px;background:#DC2626;border-radius:4px;width:0;"></div></div>'
        f'<div style="font-size:12px;font-weight:700;color:#1A1A1A;width:14px;text-align:right;">{h}</div>'
        f'</div>'
        f'<div style="display:flex;align-items:center;gap:10px;">'
        f'<div style="font-size:11px;font-weight:600;color:#D97706;width:38px;">Med</div>'
        f'<div style="flex:1;background:#FEF3C7;border-radius:4px;height:8px;overflow:hidden;">'
        f'<div class="sev-bar-fill" data-width="{m/total_issues*100:.1f}%"'
        f' style="height:8px;background:#F59E0B;border-radius:4px;width:0;"></div></div>'
        f'<div style="font-size:12px;font-weight:700;color:#1A1A1A;width:14px;text-align:right;">{m}</div>'
        f'</div>'
        f'<div style="display:flex;align-items:center;gap:10px;">'
        f'<div style="font-size:11px;font-weight:600;color:#6B7280;width:38px;">Low</div>'
        f'<div style="flex:1;background:#F3F4F6;border-radius:4px;height:8px;overflow:hidden;">'
        f'<div class="sev-bar-fill" data-width="{l/total_issues*100:.1f}%"'
        f' style="height:8px;background:#9CA3AF;border-radius:4px;width:0;"></div></div>'
        f'<div style="font-size:12px;font-weight:700;color:#1A1A1A;width:14px;text-align:right;">{l}</div>'
        f'</div>'
        f'</div></div>'
    )

    # Issues at a glance — staggered fade-up
    sorted_issues = sorted(
        issues,
        key=lambda x: {"High": 0, "Medium": 1, "Low": 2}.get(x.get("severity", "Low"), 2),
    )

    glance_cards = ""
    for idx, iss in enumerate(sorted_issues):
        sev = iss.get("severity", "Low")
        _, _, border = _SEV_COLORS.get(sev, _SEV_COLORS["Low"])
        criterion = iss.get("wcag_criterion", "")
        wcag_level = iss.get("wcag_level", "")
        wcag_mini = (
            f'<span style="background:#EDE9FE;color:#6D28D9;font-size:9px;font-weight:800;'
            f'padding:1px 6px;border-radius:20px;margin-left:5px;letter-spacing:.04em;">'
            f'WCAG {criterion}</span>'
        ) if criterion else ""
        delay = idx * 80
        glance_cards += (
            f'<div class="glance-card" style="background:#fff;border-radius:10px;padding:14px 16px;'
            f'border-top:3px solid {border};box-shadow:0 1px 3px rgba(0,0,0,.05);'
            f'transition-delay:{delay}ms;">'
            f'<div style="font-size:10px;font-weight:700;color:#9CA3AF;letter-spacing:.08em;'
            f'text-transform:uppercase;margin-bottom:6px;display:flex;align-items:center;">'
            f'{iss.get("id","--")}{wcag_mini}</div>'
            f'<div style="font-size:12px;font-weight:600;color:#1A1A1A;line-height:1.4;">'
            f'{iss.get("title","")}</div>'
            f'<div style="margin-top:8px;">{_badge(sev)}</div>'
            f'</div>'
        )

    # Detail cards — fade-up on scroll + hover lift
    detail_cards = ""
    for idx, iss in enumerate(issues):
        sev = iss.get("severity", "Low")
        _, _, border = _SEV_COLORS.get(sev, _SEV_COLORS["Low"])
        ref = iss.get("reference", "")
        criterion = iss.get("wcag_criterion", "")
        wcag_level = iss.get("wcag_level", "")
        ref_html = (
            f'<div style="margin-top:14px;padding:10px 14px;background:#F8F9FA;border-radius:8px;'
            f'border-left:3px solid #E5E5E5;font-size:12px;color:#6B7280;">'
            f'<span style="font-weight:600;color:#4B5563;">📚 Reference: </span>{ref}</div>'
        ) if ref else ""
        critical = iss.get("critical_reason", "")
        critical_html = (
            f'<div style="margin-top:8px;padding:8px 10px;background:#FFF7ED;border-radius:6px;'
            f'font-size:11px;color:#92400E;line-height:1.5;">'
            f'<span style="font-weight:700;letter-spacing:.02em;">Why critical: </span>{critical}</div>'
        ) if critical else ""
        wcag_tag = (
            f'<span style="background:#EDE9FE;color:#6D28D9;font-size:9px;font-weight:800;'
            f'letter-spacing:.08em;text-transform:uppercase;padding:2px 7px;border-radius:20px;'
            f'margin-left:6px;">WCAG {criterion} · {wcag_level}</span>'
        ) if criterion else ""
        delay = idx * 60
        detail_cards += (
            f'<div class="detail-card fade-section" style="background:#fff;border-radius:14px;overflow:hidden;'
            f'margin-bottom:20px;box-shadow:0 1px 3px rgba(0,0,0,.06),0 0 0 1px rgba(0,0,0,.04);'
            f'transition-delay:{delay}ms;">'
            f'<div style="border-left:4px solid {border};padding:20px 24px;'
            f'display:flex;justify-content:space-between;align-items:flex-start;gap:12px;">'
            f'<div>'
            f'<div style="font-size:11px;font-weight:700;color:#9CA3AF;letter-spacing:.1em;'
            f'text-transform:uppercase;margin-bottom:6px;display:flex;align-items:center;">'
            f'Issue {iss.get("id","")}{wcag_tag}</div>'
            f'<div style="font-size:17px;font-weight:700;color:#1A1A1A;">{iss.get("title","")}</div>'
            f'<div style="font-size:12px;color:#6B7280;margin-top:4px;">📍 {iss.get("location","")}</div>'
            f'</div>{_badge(sev)}</div>'
            f'<div style="padding:0 24px 24px;">'
            f'<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:4px;">'
            f'<div style="background:#FFF8F6;border-radius:10px;padding:16px;">'
            f'<div style="font-size:10px;font-weight:700;text-transform:uppercase;'
            f'letter-spacing:.08em;color:#F05023;margin-bottom:8px;">The Problem</div>'
            f'<div style="font-size:13px;color:#374151;line-height:1.6;">{iss.get("problem","")}</div>'
            f'{critical_html}'
            f'</div>'
            f'<div style="background:#F0FDF4;border-radius:10px;padding:16px;">'
            f'<div style="font-size:10px;font-weight:700;text-transform:uppercase;'
            f'letter-spacing:.08em;color:#16A34A;margin-bottom:8px;">Recommendation</div>'
            f'<div style="font-size:13px;color:#374151;line-height:1.6;">{iss.get("recommendation","")}</div>'
            f'</div></div>'
            f'{ref_html}'
            f'</div></div>'
        )

    # Accessibility score ring for sidebar stats (kept as a stat, not a section)
    a_score_stat = ""
    if accessibility_score is not None:
        a_circ = 238.76
        a_target = a_circ * (1.0 - accessibility_score / 10.0)
        a_score_stat = (
            f'<div style="text-align:center;padding-top:16px;margin-top:16px;border-top:1px solid #F3F4F6;">'
            f'<svg width="70" height="70" viewBox="0 0 90 90" style="display:block;margin:0 auto 6px;">'
            f'<circle cx="45" cy="45" r="38" fill="none" stroke="#EDE9FE" stroke-width="7"/>'
            f'<circle cx="45" cy="45" r="38" fill="none" stroke="#7C3AED" stroke-width="7"'
            f' stroke-linecap="round" transform="rotate(-90 45 45)"'
            f' stroke-dasharray="{a_circ:.2f}" stroke-dashoffset="{a_circ:.2f}"'
            f' class="score-ring" data-target="{a_target:.2f}"/>'
            f'<text x="45" y="43" text-anchor="middle" dominant-baseline="middle"'
            f' font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800"'
            f' fill="#1A1A1A" class="count-num" data-value="{accessibility_score}" data-decimals="1">{accessibility_score}</text>'
            f'<text x="45" y="57" text-anchor="middle" font-family="Inter,system-ui,sans-serif"'
            f' font-size="9" fill="#9CA3AF">/10</text>'
            f'</svg>'
            f'<div style="font-size:11px;font-weight:700;color:#6D28D9;">Accessibility</div>'
            f'<div style="font-size:10px;color:#9CA3AF;margin-top:1px;">WCAG 2.2 AA</div>'
            f'</div>'
        )

    client_info = ""
    if user_name:
        client_info += f'<div style="color:#9CA3AF;font-size:12px;margin-top:8px;">Prepared for {user_name}</div>'
    if user_website:
        client_info += f'<div style="color:#9CA3AF;font-size:12px;">{user_website}</div>'

    # Sources & Methodology
    book_cards = [
        ("Don't Make Me Think",                        "Steve Krug",                   "Usability & web UX fundamentals"),
        ("Designing User Interfaces",                  "Dmytro Malewicz (2021)",        "UI components, layouts & visual design"),
        ("Refactoring UI",                             "Adam Wathan & Steve Schoger",   "Practical UI design decisions"),
        ("Practical UI",                               "",                              "Hands-on interface design techniques"),
        ("Psychology of Design: 106 Cognitive Biases", "",                              "Cognitive biases that affect UX decisions"),
        ("Psych 101",                                  "Paul Kleinman",                 "Psychological principles behind behaviour"),
        ("UI Design Tips",                             "",                              "Quick-reference design improvement patterns"),
        ("WCAG 2.2",                                   "W3C Web Accessibility Initiative", "Accessibility guidelines — Level A & AA compliance"),
        ("Universal Principles of Design",             "Lidwell, Holden & Butler",         "200 cross-disciplinary design principles — perception, cognition, interaction"),
        ("The Design of Everyday Things",              "Don Norman",                       "Affordances, signifiers, feedback, mappings, constraints, human error"),
    ]
    book_card_html = ""
    for title, author, desc in book_cards:
        by_line = f"<div style='font-size:11px;color:#9CA3AF;margin-bottom:2px;'>{author}</div>" if author else ""
        book_card_html += (
            f'<div style="padding:12px 14px;background:#F9FAFB;border-radius:8px;">'
            f'<div style="font-size:12px;font-weight:600;color:#1A1A1A;margin-bottom:2px;">{title}</div>'
            f'{by_line}'
            f'<div style="font-size:11px;color:#6B7280;">{desc}</div>'
            f'</div>'
        )

    sources_section = (
        '<div class="fade-section" style="background:#fff;border-radius:14px;padding:28px 32px;margin-bottom:20px;'
        'box-shadow:0 1px 3px rgba(0,0,0,.05),0 0 0 1px rgba(0,0,0,.04);">'
        '<div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;'
        'color:#9CA3AF;margin-bottom:16px;">Sources &amp; Methodology</div>'
        '<div style="font-size:13px;color:#4B5563;line-height:1.7;margin-bottom:16px;">'
        'This audit is grounded in the Saasfactor UX training curriculum. Each finding is '
        'mapped to a specific principle, chapter, or concept from the following books:'
        '</div>'
        f'<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">{book_card_html}</div>'
        '</div>'
    )

    REPORT_CSS = (
        "*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}"
        "body{font-family:'Inter',system-ui,sans-serif;background:#F5F5F7;"
        "color:#1A1A1A;font-size:14px;line-height:1.6;-webkit-font-smoothing:antialiased;}"
        ".page{max-width:860px;margin:0 auto;padding:32px 24px;}"
        # Scroll fade-up
        ".fade-section{opacity:0;transform:translateY(18px);"
        "transition:opacity .55s ease,transform .55s ease;pointer-events:none;}"
        ".fade-section.visible{opacity:1;transform:translateY(0);pointer-events:auto;}"
        # Glance cards — stagger + hover
        ".glance-card{opacity:0;transform:translateY(12px);"
        "transition:opacity .4s ease,transform .4s ease,box-shadow .25s ease;pointer-events:none;}"
        ".glance-card.visible{opacity:1;transform:translateY(0);pointer-events:auto;}"
        ".glance-card.visible:hover{box-shadow:0 6px 18px rgba(0,0,0,.11)!important;"
        "transform:translateY(-3px)!important;}"
        # Detail card hover lift (after visible)
        ".detail-card.visible{transition:opacity .55s ease,transform .55s ease,"
        "box-shadow .2s ease;}"
        ".detail-card.visible:hover{box-shadow:0 6px 20px rgba(0,0,0,.10)!important;"
        "transform:translateY(-2px);}"
        # Score ring
        ".score-ring{transition:stroke-dashoffset 1.4s cubic-bezier(.4,0,.2,1);}"
        # Severity bars
        ".sev-bar-fill{transition:width 1s ease;}"
    )

    # Inline JS — all in one string to avoid f-string brace conflicts
    REPORT_JS = (
        "<script>"
        "(function(){"
        "var obs=new IntersectionObserver(function(entries){"
        "entries.forEach(function(e){"
        "if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}"
        "});},{threshold:0.08});"
        "document.querySelectorAll('.fade-section,.glance-card').forEach(function(el){"
        "obs.observe(el);});"
        "function animCount(el,target,isDec,dur){"
        "var s=performance.now();"
        "function tick(n){"
        "var p=Math.min((n-s)/dur,1);"
        "var ease=p<.5?2*p*p:(4-2*p)*p-1;"
        "el.textContent=isDec?(target*ease).toFixed(1):Math.round(target*ease);"
        "if(p<1)requestAnimationFrame(tick);}"
        "requestAnimationFrame(tick);}"
        "function animRing(){"
        "var r=document.querySelector('.score-ring');"
        "if(r){r.style.strokeDashoffset=parseFloat(r.dataset.target);}}"
        "function animCounts(){"
        "document.querySelectorAll('.count-num').forEach(function(el){"
        "animCount(el,parseFloat(el.dataset.value)||0,el.dataset.decimals==='1',1200);});}"
        "function animBars(){"
        "document.querySelectorAll('.sev-bar-fill').forEach(function(el){"
        "el.style.width=el.dataset.width;});}"
        "function resetDelays(){"
        "document.querySelectorAll('.glance-card').forEach(function(el){"
        "el.style.transitionDelay='0ms';});}"
        "window.addEventListener('load',function(){"
        "setTimeout(animRing,150);"
        "setTimeout(animCounts,150);"
        "setTimeout(animBars,300);"
        "setTimeout(resetDelays,1200);"
        "});"
        "})();"
        "</script>"
    )

    return (
        "<!DOCTYPE html>"
        '<html lang="en"><head>'
        '<meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>'
        f"<title>UX Audit — {screen_name} · Saasfactor</title>"
        '<link rel="preconnect" href="https://fonts.googleapis.com"/>'
        '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>'
        f"<style>{REPORT_CSS}</style></head><body>"

        # Cover
        '<div style="background:#0D0D0D;position:relative;overflow:hidden;padding:56px 48px 52px;">'
        '<div style="position:absolute;inset:0;background:'
        'radial-gradient(ellipse 55% 65% at 92% 5%,rgba(240,80,35,.26) 0%,transparent 58%),'
        'radial-gradient(ellipse 38% 45% at 5% 90%,rgba(240,80,35,.12) 0%,transparent 55%);"></div>'
        '<div style="position:absolute;inset:0;background-image:'
        'linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),'
        'linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:52px 52px;"></div>'
        '<div style="max-width:860px;margin:0 auto;position:relative;z-index:1;">'
        f'<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:48px;"><div></div>{logo_white_tag}</div>'
        '<div style="font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#F05023;margin-bottom:16px;">UX Audit Report</div>'
        f'<h1 style="font-size:42px;font-weight:800;color:#fff;line-height:1.1;letter-spacing:-.02em;margin-bottom:8px;">{screen_name}</h1>'
        f'<div style="color:#9CA3AF;font-size:14px;margin-top:16px;">{today}</div>'
        f'{client_info}</div></div>'

        '<div class="page">'

        # Overview — with animated score ring + severity bars
        '<div class="fade-section" style="background:#fff;border-radius:14px;padding:32px;margin-bottom:20px;'
        'box-shadow:0 1px 3px rgba(0,0,0,.05),0 0 0 1px rgba(0,0,0,.04);">'
        '<div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#9CA3AF;margin-bottom:24px;">Audit Overview</div>'
        '<div style="display:grid;grid-template-columns:auto 1fr 1fr 1fr;gap:0;align-items:start;">'
        # Col 1: Score ring
        '<div style="padding-right:28px;border-right:1px solid #F3F4F6;display:flex;flex-direction:column;align-items:center;">'
        f'{score_ring_svg}'
        '<div style="font-size:10px;color:#9CA3AF;font-weight:500;text-align:center;">Overall Score</div>'
        f'<div style="font-size:11px;font-weight:600;color:#6B7280;margin-top:2px;text-align:center;">{score_label}</div>'
        '</div>'
        # Col 2: Issues count + severity bars
        '<div style="padding:0 24px;border-right:1px solid #F3F4F6;">'
        '<div style="font-size:11px;color:#9CA3AF;font-weight:500;margin-bottom:8px;">Issues Found</div>'
        f'<div style="font-size:28px;font-weight:800;color:#1A1A1A;" class="count-num" data-value="{len(issues)}">{len(issues)}</div>'
        f'<div style="font-size:12px;color:#6B7280;margin-top:2px;">{h}H · {m}M · {l}L</div>'
        f'{sev_bar_section}'
        '</div>'
        # Col 3: Screen
        '<div style="padding:0 24px;border-right:1px solid #F3F4F6;">'
        '<div style="font-size:11px;color:#9CA3AF;font-weight:500;margin-bottom:8px;">Screen Audited</div>'
        f'<div style="font-size:15px;font-weight:700;color:#1A1A1A;line-height:1.3;">{screen_name}</div></div>'
        # Col 4: Audited By + Accessibility score
        '<div style="padding-left:24px;">'
        '<div style="font-size:11px;color:#9CA3AF;font-weight:500;margin-bottom:8px;">Audited By</div>'
        '<div style="font-size:13px;font-weight:600;color:#1A1A1A;">Saasfactor</div>'
        '<div style="font-size:12px;color:#6B7280;margin-top:2px;"><a href="https://saasfactor.co" style="color:#F05023;text-decoration:none;">saasfactor.co</a></div>'
        f'{a_score_stat}'
        '</div>'
        '</div>'
        f'<div style="margin-top:24px;padding-top:24px;border-top:1px solid #F3F4F6;font-size:14px;color:#4B5563;line-height:1.7;">{summary}</div>'
        + (
            f'<div style="margin-top:16px;padding:14px 18px;background:#F8F9FA;border-radius:10px;'
            f'border-left:3px solid #D1D5DB;">'
            f'<div style="font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;'
            f'color:#9CA3AF;margin-bottom:6px;">About This Product</div>'
            f'<div style="font-size:13px;color:#4B5563;line-height:1.6;">{product_description}</div>'
            f'</div>'
            if product_description else ""
        ) +
        '</div>'

        # Issues at a glance
        '<div style="margin-bottom:20px;">'
        '<div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#9CA3AF;margin-bottom:14px;">Issues at a Glance</div>'
        f'<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;">{glance_cards}</div>'
        '</div>'

        # Annotated screenshot
        '<div class="fade-section" style="background:#fff;border-radius:14px;overflow:hidden;margin-bottom:20px;'
        'box-shadow:0 1px 3px rgba(0,0,0,.05),0 0 0 1px rgba(0,0,0,.04);">'
        '<div style="padding:20px 24px 16px;">'
        '<div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#9CA3AF;margin-bottom:4px;">Annotated Screen</div>'
        f'<div style="font-size:15px;font-weight:600;color:#1A1A1A;">{screen_name}</div>'
        '<div style="font-size:12px;color:#9CA3AF;margin-top:2px;">Numbered markers correspond to the issues below</div>'
        '</div>'
        f'<img src="{img_src}" alt="{screen_name}" style="width:100%;display:block;"/>'
        '</div>'

        # Findings
        '<div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#9CA3AF;margin-bottom:14px;">Detailed Findings</div>'
        f'{detail_cards}'

        # Sources
        f'{sources_section}'

        '</div>'

        # CTA
        '<div style="background:#0D0D0D;position:relative;overflow:hidden;padding:52px 48px;text-align:center;">'
        '<div style="position:absolute;inset:0;background:'
        'radial-gradient(ellipse 55% 65% at 92% 5%,rgba(240,80,35,.18) 0%,transparent 58%),'
        'radial-gradient(ellipse 38% 45% at 5% 90%,rgba(240,80,35,.10) 0%,transparent 55%);"></div>'
        '<div style="position:absolute;inset:0;background-image:'
        'linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),'
        'linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:52px 52px;"></div>'
        '<div style="position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:14px;">'
        f'{logo_white_tag}'
        '<div style="color:#9CA3AF;font-size:13px;max-width:380px;line-height:1.6;">We fix UX for better onboarding, activation, and retention in 60 days at a fixed cost.</div>'
        '<div style="display:flex;gap:20px;margin-top:4px;">'
        '<a href="mailto:hi@saasfactor.co" style="color:#F05023;font-size:13px;font-weight:500;text-decoration:none;">hi@saasfactor.co</a>'
        '<a href="https://saasfactor.co" style="color:#F05023;font-size:13px;font-weight:500;text-decoration:none;">saasfactor.co</a>'
        '</div></div></div>'

        f'{REPORT_JS}'
        "</body></html>"
    )


# ─── Run ──────────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    print(f"\n  Saasfactor UX Audit Tool")
    print(f"  Open → http://localhost:{port}")
    print(f"  Press Ctrl+C to stop\n")
    app.run(host="0.0.0.0", port=port, debug=False, threaded=True)
