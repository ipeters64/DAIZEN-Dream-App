import React, { Component } from "react";
import Dreamers from "../../img/Dreamers.jpeg";
import { Link } from "react-router-dom";
export const Header = () => (
  <div className="header-box">
    <img className="header-logo" src={Dreamers} />
    <div className="header-divs">
      <h1 className="header-h1"> DAIZEN Dream App </h1>
      <h2 className="header-h2"> What Your Dream Means</h2>
    </div>
    <Link to="/demo">
      <button className="header-btn">Why Do We Dream?</button>{" "}
    </Link>
  </div>
);
