import React, { Component } from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
export const Header = () => (
  <div className="header-box">
    <img className="header-logo" src={logo} />
    <div className="header-divs">
      <h1 className="header-h1"> DAIZEN Dream App </h1>
      <h2 className="header-h2"> What Your Dream Means</h2>
    </div>
    <Link to="/dream-meaning">
      <button className="header-btn">Why Do We Dream?</button>{" "}
    </Link>
  </div>
);
