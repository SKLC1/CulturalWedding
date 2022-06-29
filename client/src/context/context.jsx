import React, { useContext, useEffect, useState } from "react";

export const authContext = React.createContext("");

export const useAuthContext = () => {
  const {token, setToken, currentUser, setCurrentUser} = useContext(authContext);
  return {token, setToken, currentUser, setCurrentUser};
}

export const useToken = () => {
  const {token, setToken} = useContext(authContext);
  return {token, setToken}
}

export const useUser = () => {
  const {currentUser, setCurrentUser} = useContext(authContext);
  return {currentUser, setCurrentUser};
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [token, setToken] = useState("");

  return (
    <authContext.Provider value={{ token, setToken, currentUser, setCurrentUser }}>
      {children}
    </authContext.Provider>
  );
};
