from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# ==========================
# DATABASE CONNECTION
# ==========================
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="choudhary_digital_craft"
)

cursor = db.cursor(dictionary=True)

# ==========================
# HOME API
# ==========================
@app.route("/")
def home():
    return jsonify({
        "message": "Choudhary Digital Craft API Running"
    })

# ==========================
# REGISTER API
# ==========================
@app.route("/register", methods=["POST"])
def register():

    data = request.json

    full_name = data["full_name"]
    email = data["email"]
    password = data["password"]

    sql = """
    INSERT INTO users
    (full_name,email,password)
    VALUES (%s,%s,%s)
    """

    cursor.execute(
        sql,
        (full_name,email,password)
    )

    db.commit()

    return jsonify({
        "status": "success",
        "message": "Registration Successful"
    })

# ==========================
# LOGIN API
# ==========================
@app.route("/login", methods=["POST"])
def login():

    data = request.json

    email = data["email"]
    password = data["password"]

    sql = """
    SELECT * FROM users
    WHERE email=%s AND password=%s
    """

    cursor.execute(
        sql,
        (email,password)
    )

    user = cursor.fetchone()

    if user:
        return jsonify({
            "status":"success",
            "user":user
        })

    return jsonify({
        "status":"error",
        "message":"Invalid Login"
    })

# ==========================
# COURSES LIST
# ==========================
@app.route("/courses")
def courses():

    cursor.execute(
        "SELECT * FROM courses"
    )

    data = cursor.fetchall()

    return jsonify(data)

# ==========================
# EBOOKS LIST
# ==========================
@app.route("/ebooks")
def ebooks():

    cursor.execute(
        "SELECT * FROM ebooks"
    )

    data = cursor.fetchall()

    return jsonify(data)

# ==========================
# RUN SERVER
# ==========================
if __name__ == "__main__":
    app.run(
        debug=True,
        host="0.0.0.0",
        port=5000
    )