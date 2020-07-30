import React from "react";
import PropTypes from "prop-types";

// stupid component renders UI

const LoginForm = (props) => {
  return (
    <div className="login-form">
      <input
        type="text"
        value={props.email}
        onChange={props.onEmailChangeHandler}
        id="email"
        placeholder="your email"
      />
      <input
        type="password"
        value={props.password}
        onChange={props.onPasswordChangeHandler}
        id="password"
        placeholder="your password"
      />
      <button onClick={props.onLoginSubmitHandler}>Log in</button>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string,
  onEmailChangeHandler: PropTypes.func,

  password: PropTypes.string,
  onPasswordChangeHandler: PropTypes.func,

  onLoginSubmitHandler: PropTypes.func,
};

export default LoginForm;
