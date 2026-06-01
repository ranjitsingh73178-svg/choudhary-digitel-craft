from flask import Blueprint, jsonify, request

payment_bp = Blueprint(
    "payment_bp",
    __name__
)

@payment_bp.route(
    "/create-order",
    methods=["POST"]
)
def create_order():

    data = request.json

    amount = data.get("amount")

    return jsonify({
        "status": "success",
        "message": "Order Created",
        "amount": amount
    })

@payment_bp.route(
    "/verify-payment",
    methods=["POST"]
)
def verify_payment():

    return jsonify({
        "status": "success",
        "message": "Payment Verified"
    })