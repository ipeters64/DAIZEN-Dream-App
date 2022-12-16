import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Login } from "./signin";
import "../../styles/user.css";

export const User = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getDreams();
    actions.getMeanings();
  }, []);

  return (
    <div className="text-center">
      {!store.activeUser ? (
        <div>
          <h1 className="text-white m-3">
            You're Not Logged In! Let's do something about that...
          </h1>
          <Login />
        </div>
      ) : (
        <div className="container footer-pusher d-flex flex-column align-items-center mb-5">

          <Search />
          <br></br>
        </div>
      )}
    </div>
  );
};
