import React, { useContext, useEffect, useState } from "react";

const multiCulturalContext = React.createContext(null);

const multiCulturalContextTemplate = {
  state: {
    newuser: [],
  },
};

export const multiCulturalProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  return (
    <multiCulturalContext.Provider value={{ state }}>
      {children}
    </multiCulturalContext.Provider>
  );
};
