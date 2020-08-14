import React from 'react';
import PropTypes from 'prop-types';

import './LoginForm.css';

// stupid component renders UI

const LoginForm = (props) => {
  return (
    <div className='login-form'>
      {props.errorMessage && (
        <div className='login-form__error'>{props.errorMessage}</div>
      )}

      <input
        type='text'
        value={props.email}
        onChange={props.onEmailChangeHandler}
        id='email'
        placeholder='Please enter your email'
        disabled={props.disabled}
      />
      <input
        type='password'
        value={props.password}
        onChange={props.onPasswordChangeHandler}
        id='password'
        placeholder='Please enter your password'
        disabled={props.disabled}
      />
      <button onClick={props.onLoginSubmitHandler}>Log in</button>
      <div className='login-form__sign-in'>
        <div>Not signed in yet? Please register here:</div>
        <button
          // onClick={props.onRegisterSubmitHandler}  // Original
          onClick={props.triggerSignin}
          // onClick={props.onSigninSubmitHandler}
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
  triggerSignin: PropTypes.func,
  onSigninSubmitHandler: PropTypes.func,

  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default LoginForm;
