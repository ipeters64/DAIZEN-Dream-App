"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, School
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager



api = Blueprint('api', __name__)




@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/login', methods=['POST'])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(username=username).first()
    print(username, password)
    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token)

@api.route('/user/active', methods=['POST'])
def get_active_user():
    body = request.get_json()
    print("//////////////////////////////", body)
    single_user = User.query.filter_by(username = body["username"]).first()
    print(single_user)

    return jsonify(single_user.serialize()), 200

@api.route('/private', methods=['POST'])
def private():
    secret_key = "aoiwdfnoainfasni"
    authentication = request.headers.get("authentication")

    if authentication == "":
        return jsonify("You are not logged in")
    elif authentication == secret_key:
        return jsonify("You are logged in")

@api.route('/user', methods=['POST'])
def create_user():
    body = request.get_json()
    username = body["username"]
    password = body["password"]
    user = User(username=username, password=password)

    db.session.add(user)
    db.session.commit()

    return(jsonify(user.serialize())), 201

@api.route('/user', methods=['GET'])
def get_users():
    users = User.query.all()
    all_users = list(map(lambda user: user.serialize(), users))
    
    return jsonify(all_users), 200

@api.route('/schools', methods=['GET'])
def get_all_schools():
    schools = School.query.all()
    all_schools = list(map(lambda school: school.serialize(), schools))
    
    return jsonify(all_schools), 200

@api.route('/schools/<id>', methods=['GET'])
def get_single_school(id):
    single_school = School.query.get(id)
    print(single_school)

    return jsonify(single_school.serialize()), 200

@api.route('/schools', methods=['POST'])
def create_Bootcamp():
    body = request.get_json()
    name = body["name"]
    logo = body["logo"]
    description = body["description"]
    website = body["website"]
    phone_number = body["phone_number"]
    school_email = body["school_email"]
    mailing_address = body["mailing_address"]
    career_options = body["career_options"]
    housing_available = body["housing_available"]
    job_placement_available = body["job_placement_available"]
    job_placement_guarantee = body["job_placement_guarantee"]
    accept_GI_Bill = body["accept_GI_Bill"]
    length_in_weeks = body["length_in_weeks"]
    tuition = body["tuition"]
    minimum_skill_level = body["minimum_skill_level"]
    scholarships_available = body["scholarships_available"]

    bootcamp = School(logo=logo, name=name, description=description, website=website, phone_number=phone_number, school_email=school_email, mailing_address=mailing_address, career_options=career_options, housing_available=housing_available, job_placement_available=job_placement_available, job_placement_guarantee=job_placement_guarantee, accept_GI_Bill=accept_GI_Bill, length_in_weeks=length_in_weeks, tuition=tuition, minimum_skill_level=minimum_skill_level, scholarships_available=scholarships_available)

    db.session.add(bootcamp)
    db.session.commit()

    return (jsonify(bootcamp.serialize())), 201

@api.route('/schools/<id>', methods=['PUT'])
def update_employee_info(id):
    record_to_update = School.query.get(id)
    
    name = request.json["name"]
    logo = request.json["logo"]
    description = request.json["description"]
    website = request.json["website"]
    phone_number = request.json["phone_number"]
    school_email = request.json["school_email"]
    mailing_address = request.json["mailing_address"]
    career_options = request.json["career_options"]
    housing_available = request.json["housing_available"]
    job_placement_available = request.json["job_placement_available"]
    job_placement_guarantee = request.json["job_placement_guarantee"]
    accept_GI_Bill = request.json["accept_GI_Bill"]
    length_in_weeks = request.json["length_in_weeks"]
    tuition = request.json["tuition"]
    minimum_skill_level = request.json["minimum_skill_level"]
    scholarships_available = request.json["scholarships_available"]


    record_to_update.name = name
    record_to_update.logo = logo
    record_to_update.description = description
    record_to_update.website = website
    record_to_update.phone_number = phone_number
    record_to_update.school_email = school_email
    record_to_update.mailing_address = mailing_address
    record_to_update.career_options = career_options
    record_to_update.housing_available = housing_available
    record_to_update.job_placement_available = job_placement_available
    record_to_update.job_placement_guarantee = job_placement_guarantee
    record_to_update.accept_GI_Bill = accept_GI_Bill
    record_to_update.length_in_weeks = length_in_weeks
    record_to_update.tuition = tuition
    record_to_update.minimum_skill_level = minimum_skill_level
    record_to_update.scholarships_available = scholarships_available
    
    db.session.commit()
    
    return (jsonify(record_to_update.serialize())), 200

@api.route('/schools/<int:id>', methods=['DELETE'])
def delete_employee(id):
    bootcamp = School.query.get(id)
    db.session.delete(bootcamp)
    db.session.commit()

    return "successfully deleted employee record"