import sys
import os
import json
import traceback

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(root, 'ux-audit-app'))

_err = None
try:
    from app import app
except Exception:
    _err = traceback.format_exc()

if _err:
    # Raw WSGI fallback — no Flask needed
    def app(environ, start_response):
        info = {
            "import_error": _err,
            "root": root,
            "root_exists": os.path.exists(root),
            "root_files": os.listdir(root)[:30] if os.path.exists(root) else [],
            "ux_audit_app_exists": os.path.exists(os.path.join(root, "ux-audit-app")),
            "python": sys.version,
            "sys_path": sys.path[:8],
        }
        body = json.dumps(info, indent=2).encode()
        start_response("500 Error", [
            ("Content-Type", "application/json"),
            ("Content-Length", str(len(body))),
        ])
        return [body]
