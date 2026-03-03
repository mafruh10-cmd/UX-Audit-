#!/bin/bash
set -e
cd "$(dirname "$0")"

if [ ! -f ".env" ]; then
  echo "  No .env file found. Copying from .env.example..."
  cp .env.example .env
  echo "  Edit .env and add your ANTHROPIC_API_KEY, then run this script again."
  exit 1
fi

if [ ! -d ".venv" ]; then
  echo "  Creating virtual environment..."
  python3 -m venv .venv
fi

source .venv/bin/activate
pip install -r requirements.txt -q --disable-pip-version-check

export $(grep -v '^#' .env | grep -v '^$' | xargs)

echo ""
echo "  Saasfactor UX Audit Tool"
echo "  ─────────────────────────────"
echo "  Open http://localhost:${PORT:-5000} in your browser"
echo "  Press Ctrl+C to stop"
echo ""

python app.py
