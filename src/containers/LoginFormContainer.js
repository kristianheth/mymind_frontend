import React, { useState } from "react";
import LoginForm from "../components/LoginForm";

// smart component handles logic and manages state

const LoginFormContainer = (props) => {
  const [email, changeEmail] = useState("");

  const onEmailChangeHandler = (event) => {
    changeEmail(event.target.value);
  };

  const [password, changePassword] = useState("");

  const onPasswordChangeHandler = (event) => {
    changePassword(event.target.value);
  };

  const onLoginSubmitHandler = () => {
    props.startAuthentication(email, password);
  };

  return (
    <LoginForm
      email={email}
      onEmailChangeHandler={onEmailChangeHandler}
      password={password}
      onPasswordChangeHandler={onPasswordChangeHandler}
      onLoginSubmitHandler={onLoginSubmitHandler}
      disabled={props.disabled}
      errorMessage={props.errorMessage}
    />
  );
};

export default LoginFormContainer;
