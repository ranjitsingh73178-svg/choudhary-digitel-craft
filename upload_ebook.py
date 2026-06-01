from flask import Blueprint, request, jsonify
import os

upload_bp = Blueprint("upload_bp", __name__)

UPLOAD_FOLDER = "uploads"

@upload_bp.route("/upload-ebook", methods=["POST"])
def upload_ebook():

    if "file" not in request.files:
        return jsonify({
            "status": "error",
            "message": "No file selected"
        })

    file = request.files["file"]

    if file.filename == "":
        return jsonify({
            "status": "error",
            "message": "Empty file"
        })

    os.makedirs(UPLOAD_FOLDER, exist_ok=True)

    filepath = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    file.save(filepath)

    return jsonify({
        "status": "success",
        "message": "E-Book Uploaded",
        "file": file.filename
    })