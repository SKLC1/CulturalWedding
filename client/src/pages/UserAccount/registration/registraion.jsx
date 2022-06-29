import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./registiration.css";
import { API } from "../../../api/api.js"

function Registraion() {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = signUpData;
  const changeHandler = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: [e.target.value] });
  };
  const submitHandler = async(e) => {
    e.preventDefault();
    const {data} = await API.post('/users',{email: signUpData.email, password: signUpData.password});
    console.log(data);
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
                onChange={changeHandler}
              />
            </div>
            <div className="User-Password">
              <label>Enter Password </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={changeHandler}
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
