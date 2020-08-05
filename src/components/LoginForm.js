import React from "react";
import PropTypes from "prop-types";

import "./LoginForm.css";

// stupid component renders UI

const LoginForm = (props) => {
  return (
    <div className="login-form">

      {props.errorMessage && (
        <div className="login-form__error">
          {props.errorMessage}
        </div>
      )}

      <input
        type="text"
        value={props.email}
        onChange={props.onEmailChangeHandler}
        id="email"
        placeholder="your email"
        disabled={props.disabled}
      />
      <input
        type="password"
        value={props.password}
        onChange={props.onPasswordChangeHandler}
        id="password"
        placeholder="your password"
        disabled={props.disabled}
      />
      <button onClick={props.onLoginSubmitHandler}>Log in</button>
      <div className="sign-in-form">
        <button
          onClick={props.onRegisterSubmitHandler}
          disabled={props.disabled}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string,
  onEmailChangeHandler: PropTypes.func,

  password: PropTypes.string,
  onPasswordChangeHandler: PropTypes.func,

  onLoginSubmitHandler: PropTypes.func,

  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default LoginForm;
