import sys
import os
import traceback

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(root, 'ux-audit-app'))

try:
    from app import app
except Exception as _e:
    from flask import Flask, jsonify
    app = Flask(__name__)
    _err = traceback.format_exc()

    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def _show_error(path):
        return jsonify({
            'import_error': str(_e),
            'traceback': _err,
            'sys_path': sys.path[:5],
            'root': root,
            'root_files': os.listdir(root) if os.path.exists(root) else 'missing',
        }), 500
