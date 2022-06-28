import { useState } from "react";

function Login() {
        const [data,setData] = useState({
          email:"",
          password:""
        })
        const {email,password} = data;
        const changeHandler = e => {
          setData({...data,[e.target.name]:[e.target.value]});
        }
        const submitHandler = e => {
          e.preventDefault();
          console.log(data);
        }
  return (
    <div className="Login_Page">
          <div className="header">
             <h1 className="title">Login</h1>
          </div>
      <div className="main">
           <form onSubmit={submitHandler} className="User-Info">
              <div className="User-Email">
                 <label>Enter Email </label>
                 <input type="email" name="email" value={email} onChange={changeHandler}/>
              </div>
              <div className="User-Password"> 
                 <label>Enter Password </label>
                 <input type="password" name="password" value={password} onChange={changeHandler}/>
              </div>
              <div className="Login-Button">
                 <input type="submit" name="login"/>
              </div>
        </form>
        <div className="Registration">
          <div>Don't have an Account?, Sign Up!</div>
          
        </div>
      </div>
      </div>
  );
}

export default Login;