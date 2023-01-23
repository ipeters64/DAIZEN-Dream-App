import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faPhone,
  faGear,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-box">
        <Link to="/">
        <li className="navbar-items">
          Home <FontAwesomeIcon icon={faHouse} />
        </li></Link>
        <Link to="/features">
        <li className="navbar-items">
          Features <FontAwesomeIcon icon={faGear} />
        </li></Link>
        <Link to="/contact">
        <li className="navbar-items">
          Contact <FontAwesomeIcon icon={faPhone} />
        </li></Link>
        <Link to="/about">
        <li className="navbar-items">
          About <FontAwesomeIcon icon={faCircleInfo} />
        </li></Link>
        <Link to="/signup">
        <li className="navbar-items">
          User <FontAwesomeIcon icon={faUser} />
        </li></Link>
      </ul>
    </nav>
  );
};
