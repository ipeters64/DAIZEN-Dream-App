import React, { useContext, useState } from "react";

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [error, setError] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogIn = async (event) => {
    event.preventDefault();
    const isLoggedIn = await actions.getToken(username, password);

    if (isLoggedIn) {
      navigate("/user");
    } else {
      setError("Cant Log in");
    }
    // {
    //   store.activeUser ? loadUser() : "";
    // }
  };
  if (store.activeUser) {
    navigate("/user");
    location.reload();
  } else {
    return (
      <div className="container d-flex justify-content-center vh-100">
        <div className="card w-50 login mt-5">
          <div className="card-body">
            <h5 className="card-title">Login</h5>
            <div className="card-text">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Username
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="UserName"
                  onChange={(e) => setUserName(e.target.value)}
                  value={username}
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
          </div>
          <a
            href="#"
            className="btn btn-primary btn-lg m-auto"
            onClick={handleLogIn}
          >
            Login
          </a>
          <br></br>
          <Link to="/signup" className="text-center">
            Don't Have a Usename and Password yet? Click Here to Sign Up!
          </Link>
        </div>
        {error && <p>{error}</p>}
      </div>
    );
  }
};
