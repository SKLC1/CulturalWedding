import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./registiration.css";
import { API } from "../../../api/api.js";
import { authContext, useAuthContext } from "../../../context/context";

function Registraion() {
  const { setToken, setCurrentUser, currentUser } = useAuthContext(authContext);
  const [success, setSuccess] = useState(false);
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = signUpData;
  const changeHandler = (target) => {
    setSignUpData({ ...signUpData, [target.name]: target.value });
  };
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const { data } = await API.post("/users", {
        email: signUpData.email,
        password: signUpData.password,
      });
      setToken(data.token);
      setCurrentUser(data.user);
      setSuccess(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (success) {
    return (
      <div className="success">
        <h1>{`You are now logged in with - ${currentUser.email}`}</h1>
      </div>
    );
  }

  return (
    <div className="Registraion_Page">
      <div className="registiration-card">
        <div className="header">
          <h1 className="title">Registraion</h1>
        </div>
        <div className="main">
          <form onSubmit={submitHandler} className="User-Info">
            <div className="User-Email">
              <label className="title">Enter Email </label>
              <input
                className="User-Email-Lable"
                type="email"
                name="email"
                value={email}
                onChange={({ target }) => changeHandler(target)}
              />
            </div>
            <div className="User-Password">
              <label className="title">Enter Password </label>
              <input
                className="User-Email-Lable"
                type="password"
                name="password"
                value={password}
                onChange={({ target }) => changeHandler(target)}
              />
            </div>
            <div className="Registraion-Button ">
              <input
                type="submit"
                value="Submit"
                name="Registraion"
                className="Login-Button"
              />
            </div>
          </form>
          <div className="Login ">
            <div>
              Do you have an Account?,<br></br>{" "}
              <span className="log-in">
                <Link to="/login">Log In!</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registraion;
