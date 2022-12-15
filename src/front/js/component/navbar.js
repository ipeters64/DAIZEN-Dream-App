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
        <li className="navbar-items">
          Home <FontAwesomeIcon icon={faHouse} />
        </li>
        <Link to="/features">
        <li className="navbar-items">
          Features <FontAwesomeIcon icon={faGear} />
        </li></Link>
        <li className="navbar-items">
          Contact <FontAwesomeIcon icon={faPhone} />
        </li>
        <li className="navbar-items">
          About <FontAwesomeIcon icon={faCircleInfo} />
        </li>
        <li className="navbar-items">
          User <FontAwesomeIcon icon={faUser} />
        </li>
      </ul>
    </nav>
  );
};
