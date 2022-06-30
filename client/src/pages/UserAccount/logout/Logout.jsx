import React, { useState } from "react";
import { API } from "../../../api/api";
import { authContext, useAuthContext } from "../../../context/context";

export const Logout = () => {
    const {token, setToken, setCurrentUser, currentUser} = useAuthContext(authContext);
    const [success, setSuccess] = useState("");
    const [successALL, setSuccessALL] = useState("");
    const logoutFunc = async() => {
        try {
            const {data} = await API.post("/users/logout",{}, {headers: {Authorization: 'Bearer ' + token}})
            console.log(data);
            setSuccess(currentUser);
            setCurrentUser("");
            setToken("");
        } catch (error) {
            console.log(error);
        }
    }
    const logoutALLFunc = async() => {
        try {
            const {data} = await API.post("/users/logoutALL",{}, {headers: {Authorization: 'Bearer ' + token}})
            console.log(data);
            setSuccessALL(currentUser);
            setCurrentUser("");
            setToken("");
        } catch (error) {
            console.log(error);
        }
    }
    if(success) {
        return (
          <div className="success">
            <h1>{`you logged out - ${success.email}`}</h1>
          </div>
        )
      }
    if(successALL) {
        return (
          <div className="success">
            <h1>{`you logged out from all devices - ${successALL.email}`}</h1>
          </div>
        )
      }
    return (
        <div className="logout">
            {currentUser? <><h3>logout: </h3>
            <button onClick={logoutFunc}>Enter</button>
            <h3>logout from all devices: </h3>
            <button onClick={logoutALLFunc}>Enter</button></>: <h3>you already logged out</h3>}
        </div>
    )
}