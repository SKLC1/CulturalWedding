import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_1.png";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={logo} width="50px" />
        </li>

        <Link to="/">
          <li className="li-home">Home</li>
        </Link>
        <Link to="/ceremony">
          <li className="li-ceremony">Ceremony</li>
        </Link>
        <Link to="/share">
          <li className="li-share">Share with us</li>
        </Link>
        <Link to="/about">
          {" "}
          <li className="li-about">About</li>
        </Link>
        <Link to="/login">
          {" "}
          <li className="li-login">Log in</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
