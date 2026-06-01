from flask import Blueprint, jsonify

admin_bp = Blueprint(
    "admin_bp",
    __name__
)

@admin_bp.route(
    "/admin/stats"
)
def admin_stats():

    return jsonify({

        "students": 0,

        "courses": 0,

        "ebooks": 0,

        "revenue": 0

    })