import React, { useState } from 'react';
import LoginFormContainer from './LoginFormContainer';
import SigninFormContainer from './SigninFormContainer';

import UserContext from '../context/userContext';

import axios from 'axios';
import './AuthenticatedContainer.css';

import neural from './NeuralNetwork.jpg';

const AuthenticatedContainer = ({ children }) => {
  const token = localStorage.getItem('token');

  let initialUser;

  const storedUser = localStorage.getItem('user');

  if (storedUser) {
    initialUser = JSON.parse(storedUser);
  }

  const [user, updateUser] = useState({ token, user: initialUser });

  const [requestStatus, updateRequestStatus] = useState('IDLE');
  const [errorMessage, updateErrorMessage] = useState();

  const logOff = () => {
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');
    updateUser({ token: undefined, user: undefined });
  };

  const startAuthentication = (email, password) => {
    updateRequestStatus('STARTED');

    // Request API.
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/auth/local`, {
        identifier: email,
        password: password,
      })
      .then((response) => {
        // Save localStorage
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.jwt);

        updateUser({ token: response.data.jwt, user: response.data.user });
        updateRequestStatus('SUCCESS');
      })
      .catch((error) => {
        const { data } = error.response.data;

        const errMessage = data
          .map(({ messages }) => {
            const messagesAsLines = messages
              .map(({ message }) => message)
              .join('\n');
            return messagesAsLines;
          })
          .join('');

        updateErrorMessage(errMessage);
        updateRequestStatus('FAILED');
      });
  };

  ///////////// Trial to build Signin ... ////////////////

  const startRegistration = (username, email, password) => {
    updateRequestStatus('STARTED');

    // Request API.
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/auth/local/register`, {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        // Save localStorage
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.jwt);

        updateUser({ token: response.data.jwt, user: response.data.user });
        updateRequestStatus('SUCCESS');
        console.log('Well done!');
      })
      .catch((error) => {
        const { data } = error.response.data;

        const errMessage = data
          .map(({ messages }) => {
            const messagesAsLines = messages
              .map(({ message }) => message)
              .join('\n');
            return messagesAsLines;
          })
          .join('');

        updateErrorMessage(errMessage);
        updateRequestStatus('FAILED');
      });
  };

  return (
    <UserContext.Provider value={{ user, logOff }}>
      <div
        style={{
          backgroundImage: `url(${neural})`,
          // backgroundImage: `url(${neural})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          backgroundPosition: `50% 70%`,
          // backgroundPositionY
        }}
        className='authenticated-container'
      >
        {!user.token && (
          <LoginFormContainer
            startAuthentication={startAuthentication}
            startRegistration={startRegistration}
            disabled={requestStatus === 'STARTED'}
            errorMessage={errorMessage}
          />
        )}

        {/* {!user.token && (
          <SigninFormContainer
            startRegistration={startRegistration}
            disabled={requestStatus === 'STARTED'}
            errorMessage={errorMessage}
          />
        )} */}

        {user.token && children}
      </div>
    </UserContext.Provider>
  );
};

export default AuthenticatedContainer;
