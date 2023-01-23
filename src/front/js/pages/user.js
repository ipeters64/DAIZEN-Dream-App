import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Login } from "./signin";
import "../../styles/user.css";
import { Home } from "./home.js";

export const User = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="text-center">
      {!store.isUserActive ? (
        <div>
          <h1 className="text-white m-3">
            You're Not Logged In! Let's do something about that...
          </h1>
          <Login />
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
};