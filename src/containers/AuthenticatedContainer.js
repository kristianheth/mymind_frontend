import React, { useState } from "react";
import LoginFormContainer from "./LoginFormContainer";

const AuthenticatedContainer = ({ children }) => {
  const token = false; // undefined;

  const [user, updateUser] = useState({ token });

  const startAuthentication = (email, password) => {};

  return (
    <div className="authenticated-container">
      {/* <UserContext.Provider value={{ user: {}, logOff }}> */}

      {!user.token && (
        <LoginFormContainer startAuthentication={startAuthentication} />
      )}

      {user.token && children}

      {/* </UserContext.Provider> */}
    </div>
  );
};

export default AuthenticatedContainer;
