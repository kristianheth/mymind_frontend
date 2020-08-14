import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SigninForm from '../components/SigninForm';

// smart component handles logic and manages state

const LoginFormContainer = (props) => {
  const [username, changeUsername] = useState('');

  const [signin, triggerSigninHandler] = useState(false);

  const onUsernameChangeHandler = (event) => {
    changeUsername(event.target.value);
  };
  const [email, changeEmail] = useState('');

  const onEmailChangeHandler = (event) => {
    changeEmail(event.target.value);
  };

  const [password, changePassword] = useState('');

  const onPasswordChangeHandler = (event) => {
    changePassword(event.target.value);
  };

  const onLoginSubmitHandler = () => {
    props.startAuthentication(email, password);
  };

  const onSigninSubmitHandler = () => {
    props.startRegistration(username, email, password);
  };

  const triggerSignin = () => {
    triggerSigninHandler(!signin);
  };

  // let triggerSignin = false;

  // return triggerSignin === true ? (
  return (
    <>
      {signin === false ? (
        <LoginForm
          email={email}
          onEmailChangeHandler={onEmailChangeHandler}
          password={password}
          onPasswordChangeHandler={onPasswordChangeHandler}
          onLoginSubmitHandler={onLoginSubmitHandler}
          triggerSignin={triggerSignin}
          disabled={props.disabled}
          errorMessage={props.errorMessage}
        />
      ) : (
        <SigninForm
          username={username}
          onUsernameChangeHandler={onUsernameChangeHandler}
          email={email}
          onEmailChangeHandler={onEmailChangeHandler}
          password={password}
          onPasswordChangeHandler={onPasswordChangeHandler}
          onSigninSubmitHandler={onSigninSubmitHandler}
          triggerSignin={triggerSignin}
          disabled={props.disabled}
          errorMessage={props.errorMessage}
        />
      )}
    </>
  );
};

export default LoginFormContainer;
