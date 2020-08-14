import React, { useState } from 'react';
import SigninForm from '../components/SigninForm';

// smart component handles logic and manages state

const SigninFormContainer = (props) => {
  const [username, changeUsername] = useState('');

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

  const onSigninSubmitHandler = () => {
    props.startRegistration(username, email, password);
  };

  return (
    <SigninForm
      username={username}
      onUsernameChangeHandler={onUsernameChangeHandler}
      email={email}
      onEmailChangeHandler={onEmailChangeHandler}
      password={password}
      onPasswordChangeHandler={onPasswordChangeHandler}
      onSigninSubmitHandler={onSigninSubmitHandler}
      disabled={props.disabled}
      errorMessage={props.errorMessage}
    />
  );
};

export default SigninFormContainer;
