import React from 'react';
import PropTypes from 'prop-types';

import './SigninForm.css';

const SigninForm = (props) => {
  return (
    <div className='sign-in-form'>
      {props.errorMessage && (
        <div className='login-form__error'>{props.errorMessage}</div>
      )}

      <input
        type='text'
        value={props.username}
        onChange={props.onUsernameChangeHandler}
        id='username'
        placeholder='Please enter a username'
        disabled={props.disabled}
      />
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

      <button onClick={props.onSigninSubmitHandler} disabled={props.disabled}>
        Sign in
      </button>

      <button onClick={props.triggerSignin} disabled={props.disabled}>
        Return to Log in
      </button>
    </div>
  );
};

SigninForm.propTypes = {
  username: PropTypes.string,
  onUsernameChangeHandler: PropTypes.func,

  email: PropTypes.string,
  onEmailChangeHandler: PropTypes.func,

  password: PropTypes.string,
  onPasswordChangeHandler: PropTypes.func,

  onSigninSubmitHandler: PropTypes.func,

  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default SigninForm;
