import { useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../../api/api";
import { authContext, useAuthContext } from "../../../context/context";
import "./login.css";

function Login() {
  const {token, setToken, setCurrentUser, currentUser} = useAuthContext(authContext);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = async(e) => {
    e.preventDefault();
    try {
      const {data} = await API.post('/users/login',{email, password});
        setToken(data.token);
        setCurrentUser(data.user);
        setSuccess(true);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  if(success) {
    return (
      <div className="success">
        <h1>{`you did it - ${currentUser.email}`}</h1>
      </div>
    )
  }
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
