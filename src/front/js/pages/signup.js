import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    actions.signUp(userName, password);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/user");
    }, 1000);
  };

  return (
    <div className="container d-flex justify-content-center vh-100">
      <div className="card w-50 signup mt-5">
        <div className="card-body">
          <h5 className="card-title">Signup</h5>
          {!isLoading ? (
            <div className="card-text">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Email
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
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                ></input>
              </div>
            </div>
          ) : (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
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