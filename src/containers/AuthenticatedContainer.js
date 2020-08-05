import React, { useState } from "react";
import LoginFormContainer from "./LoginFormContainer";

import UserContext from '../context/userContext';

import axios from "axios";
import "./AuthenticatedContainer.css";

import laser from "./laserFullHD.jpg";

const AuthenticatedContainer = ({ children }) => {
  const token = localStorage.getItem("token");

  let initialUser;

  const storedUser = localStorage.getItem("user");

  if (storedUser) {
    initialUser = JSON.parse(storedUser);
  }

  const [user, updateUser] = useState({ token, user: initialUser });

  const [requestStatus, updateRequestStatus] = useState('IDLE');
  const [errorMessage, updateErrorMessage] = useState();

  const logOff = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
    updateUser({ token: undefined, user: undefined });
  };

  const startAuthentication = (email, password) => {
    updateRequestStatus('STARTED');

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
        updateRequestStatus('SUCCESS');
      })
      .catch((error) => {
        const { data } = error.response.data;
        const errMessage = data.map(({ messages }) => {
          const messagesAsLines = messages.map(({ message }) => message).join('\n');
          return messagesAsLines;
        }).join('');
        updateErrorMessage(errMessage);
        updateRequestStatus('FAILED');
      });
  };

  return (
    <UserContext.Provider value={{ user, logOff }}>
      <div
        style={{
          backgroundImage: `url(${laser})`,
          // backgroundImage: `url(${neural})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          backgroundPosition: `50% 70%`,
          // backgroundPositionY
        }}
        className="authenticated-container"
      >

        {!user.token && (
          <LoginFormContainer
            startAuthentication={startAuthentication}
            disabled={requestStatus === 'STARTED'}
            errorMessage={errorMessage}
          />
        )}

        {user.token && children}

      </div>
    </UserContext.Provider>
  );
};

export default AuthenticatedContainer;
