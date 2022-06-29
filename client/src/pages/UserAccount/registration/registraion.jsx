import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./registiration.css";
import { API } from "../../../api/api.js"
import { authContext, useAuthContext } from "../../../context/context";

function Registraion() {
  const {token, setToken, currentUser, setCurrentUser} = useAuthContext(authContext);
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = signUpData;
  const changeHandler = (target) => {
    setSignUpData({ ...signUpData, [target.name]: target.value});
  };
  const submitHandler = async(e) => {
    try {
      e.preventDefault();
      const {data} = await API.post('/users',{email: signUpData.email, password: signUpData.password});
      setToken(data.token);
      // console.log(data.user);
      // console.log(setCurrentUser);
      setCurrentUser(data.user);
    } catch (e) {
      console.log(e.message);
    }
    
  };
  return (
    <div className="Registraion_Page">
      <div className="registiration-card">
        <div className="header">
          <h1 className="title">Registraion</h1>
        </div>
        <div className="main">
          <form onSubmit={submitHandler} className="User-Info">
            <div className="User-Email">
              <label>Enter Email </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={({target})=>changeHandler(target)}
              />
            </div>
            <div className="User-Password">
              <label>Enter Password </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={({target})=>changeHandler(target)}
              />
            </div>
            <div className="Registraion-Button">
              <input type="submit" name="Registraion" />
            </div>
          </form>
          <div className="Login">
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
