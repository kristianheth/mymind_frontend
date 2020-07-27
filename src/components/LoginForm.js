import React from "react";
import PropTypes from "prop-types";

const LoginForm = () => {
  return <div className="login-form">LoginForm</div>;
};

LoginForm.propTypes = {
  email: PropTypes.string,
  onEmailChangeHandler: PropTypes.func,

  password: PropTypes.string,
  onPasswordChangeHandler: PropTypes.func,

  onLoginSubmitHandler: PropTypes.func,
};

export default LoginForm;
