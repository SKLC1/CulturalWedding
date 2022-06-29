import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_1.png";
import { authContext, useUser } from "../../context/context.jsx";

import "./navbar.css";

const Navbar = () => {
  const {currentUser, setCurrentUser} = useUser(authContext);
  return (
    <div className="navbar">
          {console.log(currentUser)}
      <ul>
        <li className="logo">
          <img src={logo} width="50px" alt="logo" />
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
          <li className="li-login">{currentUser? "Log out": "Log in"}</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
