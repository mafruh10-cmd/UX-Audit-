import io
import sys
from pathlib import Path

try:
    from pypdf import PdfReader, PdfWriter
except ImportError:
    print("Error: pypdf not installed. Run: pip install pypdf")
    sys.exit(1)

MAX_SIZE_MB = 15


def make_writer(reader: PdfReader, page_indices: list) -> PdfWriter:
    w = PdfWriter()
    for i in page_indices:
        w.add_page(reader.pages[i])
    return w


def measure(writer: PdfWriter) -> int:
    buf = io.BytesIO()
    writer.write(buf)
    return buf.tell()


def find_cutoff(reader: PdfReader, page_indices: list, max_bytes: int) -> int:
    """Binary search: return max N so that page_indices[:N] fits in max_bytes."""
    lo, hi = 1, len(page_indices)
    while lo < hi:
        mid = (lo + hi + 1) // 2
        w = make_writer(reader, page_indices[:mid])
        if measure(w) <= max_bytes:
            lo = mid
        else:
            hi = mid - 1
    return lo


def split_pdf(input_path: str, max_mb: float = MAX_SIZE_MB):
    input_file = Path(input_path)
    if not input_file.exists():
        print(f"Error: File not found: {input_path}")
        sys.exit(1)

    output_dir = input_file.parent / f"{input_file.stem}_parts"
    output_dir.mkdir(exist_ok=True)

    file_size_mb = input_file.stat().st_size / 1_000_000
    print(f"Reading: {input_file.name} ({file_size_mb:.1f} MB)")

    reader = PdfReader(input_path)
    total_pages = len(reader.pages)
    max_bytes = int(max_mb * 1_000_000)

    # Estimate pages per chunk from average file ratio
    avg_bytes_per_page = input_file.stat().st_size / total_pages
    batch_size = max(5, int(max_bytes / avg_bytes_per_page) // 4)

    print(f"Total pages  : {total_pages}")
    print(f"Max size/part: {max_mb} MB")
    print(f"Output dir   : {output_dir}\n")

    chunks = []
    page_index = 0

    while page_index < total_pages:
        chunk = []

        # Grow the chunk in batches until we exceed the limit
        while page_index < total_pages:
            # Add one batch
            for _ in range(batch_size):
                if page_index >= total_pages:
                    break
                chunk.append(page_index)
                page_index += 1

            # Measure current size
            w = make_writer(reader, chunk)
            size = measure(w)

            if size > max_bytes:
                # We've exceeded — find the precise cutoff via binary search
                # Only search if we have more than batch_size pages
                # (so there's something to search in)
                if len(chunk) > 1:
                    n = find_cutoff(reader, chunk, max_bytes)
                    if n < len(chunk):
                        # Give back excess pages
                        page_index -= (len(chunk) - n)
                        chunk = chunk[:n]
                break

            if page_index >= total_pages:
                break  # Reached end of file naturally

        writer = make_writer(reader, chunk)
        chunks.append((chunk, writer))

    total_parts = len(chunks)
    pad = len(str(total_parts))

    for part_num, (chunk, writer) in enumerate(chunks, start=1):
        part_label = str(part_num).zfill(pad)
        output_path = output_dir / f"{input_file.stem}_part{part_label}.pdf"

        with open(output_path, "wb") as f:
            writer.write(f)

        size_mb = output_path.stat().st_size / 1_000_000
        warning = f"  ⚠ exceeds {max_mb} MB" if size_mb > max_mb else ""
        print(f"  Part {part_label}: pages {chunk[0]+1}–{chunk[-1]+1} "
              f"({len(chunk)} pages) → {output_path.name} ({size_mb:.1f} MB){warning}")

    print(f"\nDone. {total_parts} files saved to: {output_dir}")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python split_pdf.py <file.pdf> [max_size_mb]")
        print("Example: python split_pdf.py bigfile.pdf 15")
        sys.exit(1)

    max_mb = float(sys.argv[2]) if len(sys.argv) >= 3 else MAX_SIZE_MB
    split_pdf(sys.argv[1], max_mb)
