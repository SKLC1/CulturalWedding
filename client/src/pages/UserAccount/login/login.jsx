import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    //! add here the request to the backend
    console.log(data);
  };
  return (
    <div className="Login_Page">
      <div className="Login_card">
        <div className="header">
          <h1 className="title">Login</h1>
        </div>
        <div className="main">
          <form onSubmit={submitHandler} className="User-Info">
            <div className="User-Email">
              <label>Enter Email </label>
              <br></br>
              <input
                type="email"
                name="email"
                value={email}
                onChange={changeHandler}
              />
            </div>
            <div className="User-Password">
              <label>Enter Password </label>
              <br></br>
              <input
                type="password"
                name="password"
                value={password}
                onChange={changeHandler}
              />
            </div>
            <div className="Login-Button">
              <input type="submit" name="login" />
            </div>
          </form>
          <div className="Registration">
            <div>
              Don't have an Account?,<br></br>
              <span className="sign-up">
                <Link to="/signup">Register here/Sign up</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
