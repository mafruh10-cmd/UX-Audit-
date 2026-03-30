import sys
import os
import json
import traceback

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(root, 'ux-audit-app'))

# app must be assigned at module level for @vercel/python static analysis
app = None
_err = None

try:
    from app import app as _imported_app
    app = _imported_app
except Exception:
    _err = traceback.format_exc()

if app is None:
    # Fallback Flask app — surfaces the import error as JSON
    import flask as _flask
    _fallback = _flask.Flask(__name__)

    @_fallback.route('/', defaults={'path': ''})
    @_fallback.route('/<path:path>')
    def _error_route(path):
        return _flask.jsonify({
            "import_error": _err,
            "root": root,
            "root_exists": os.path.exists(root),
            "python": sys.version,
        }), 500

    app = _fallback
