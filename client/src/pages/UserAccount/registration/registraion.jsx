import { useState } from "react";
function Registraion() {
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
          //! add here the request to the backend
          console.log(data);
        }
  return (
    <div className="Registraion_Page">
          <div className="header">
             <h1 className="title">Registraion</h1>
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
              <div className="Registraion-Button">
                 <input type="submit" name="Registraion"/>
              </div>
        </form>
        <div className="Login">
          <div>Do have an Account?, Log In!</div>
        </div>
      </div>
      </div>
  );
}

export default Registraion;