import React, { useState } from "react";
import LoginFormContainer from "./LoginFormContainer";
import axios from "axios";

import laser from "./laser.jpg";

const AuthenticatedContainer = ({ children }) => {
  let token;
  let initialUser;
  const storedToken = localStorage.getItem("token");

  if (storedToken) {
    token = storedToken;
  }

  const storedUser = localStorage.getItem("user");

  if (storedUser) {
    initialUser = JSON.parse(storedUser);
  }

  const [user, updateUser] = useState({ token, user: initialUser });

  const startAuthentication = (email, password) => {
    // Request API.
    axios
      .post("https://mymind-backend.herokuapp.com/auth/local", {
        identifier: email,
        password: password,
      })
      .then((response) => {
        // Save localStorage
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.jwt);

        updateUser({ token: response.data.jwt, user: response.data.user });
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${laser})`,
        backgroundRepeat: `no-repeat center center fixed`,
        backgroundSize: `cover`,
      }}
      className="authenticated-container"
    >
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
