import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    const signInOk = await actions.createUser(userName, password);

    if (signInOk) {
      navigate("/user");
    } else {
      alert("Unable to sign in correctly");
    }
  };

  return (
    <div className="container d-flex justify-content-center vh-100">
      <div className="card w-50 signup mt-5">
        <div className="card-body">
          <h5 className="card-title">Signup</h5>
          <div className="card-text">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Username
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                aria-label="Username"
                aria-describedby="basic-addon1"
              ></input>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Password
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                aria-label="Username"
                aria-describedby="basic-addon1"
              ></input>
            </div>
          </div>
        </div>
        <a
          href="#"
          className="btn btn-primary btn-lg m-auto"
          onClick={handleSignUp}
        >
          Sign Up
        </a>
        <br></br>
        <Link to="/signin" className="text-center">
          Already Have a Username and Password? Click Here to Login!
        </Link>
      </div>
    </div>
  );
};
