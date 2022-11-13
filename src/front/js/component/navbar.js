import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-box">
        <li className="navbar-items">Home</li>

        <li className="navbar-items">Features</li>
        <li className="navbar-items">Contact</li>
        <li className="navbar-items">About</li>
        <li className="navbar-items">User</li>
      </ul>
    </nav>
  );
};
