import React, { Component } from "react";
import logo from "../../img/bestlogo.jpeg";
import { Link } from "react-router-dom";
export const Header = () => (
  <div className="header-box">
    <Link to="/">
    <img className="header-logo" src={logo} />
    </Link>
    <div className="header-divs">
      <h1 className="header-h1">DAIZEN</h1>
      <h2 className="header-h2">Dream APP</h2>
      <h3 className="header-h2">What Your Dream Means</h3>
    </div>
    <Link to="/dream-meaning">
      <button className="header-btn">Why Do We Dream?</button>{" "}
    </Link>
  </div>
);
