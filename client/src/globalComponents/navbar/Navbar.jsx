import "./navbar.css";

import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/logo_1.png";
import { authContext, useUser } from "../../context/context.jsx";

const Navbar = () => {
  const {currentUser, setCurrentUser} = useUser(authContext);
  return (
    <div className="navbar">
         {/* //! changed by abed --- > i added a new div for the ul items.. 
         //? tell me if you get conflicts here. */}
        <div className="logo">
          <img src={logo} width="50px" alt="logo" />
        </div>
        <div className="navbar-items">
        <ul>
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
        <Link to={`${currentUser? "/logout": "/login"}`}>
          {" "}
          <div className="login-border">
          <li className="li-login">Login</li>
          </div>
        </Link>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
