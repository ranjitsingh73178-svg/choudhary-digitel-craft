from flask import Blueprint
from flask import request
from flask import jsonify

course_bp = Blueprint(
    "course_bp",
    __name__
)

@course_bp.route(
    "/add-course",
    methods=["POST"]
)
def add_course():

    data = request.json

    return jsonify({

        "status":"success",

        "course_name":
        data.get("course_name")

    })