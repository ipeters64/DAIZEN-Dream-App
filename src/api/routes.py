"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Dream
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/user', methods=['GET'])
def get_users():
    
    users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users))

    return jsonify(all_users), 200

@api.route('/dreams', methods=['GET'])
def get_all_dreams():

    dreams = Dream.query.all()
    all_dreams = list(map(lambda dream: dream.serialize(), dreams))
    
    return jsonify(all_dreams), 200

@api.route('/dreams/<id>', methods=['GET'])
def get_single_dream(id):

    single_dream = Dream.query.get(id)
    print(single_dream)

    return jsonify(single_dream.serialize()), 200