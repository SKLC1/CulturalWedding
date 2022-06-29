import React, { useContext, useEffect, useState } from "react";

const authContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [token, setToken] = useState();

  return (
    <authContext.Provider value={{ token, setToken }}>
      {children}
    </authContext.Provider>
  );
};
