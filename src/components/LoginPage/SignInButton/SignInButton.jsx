import React from 'react';
import googleIcon from '../../../assets/img/google-icon.png';
import './SignInButton.css';

export const SignInButton = ({className, authHandler}) => {
  return (
    <>
      <div className={className} onClick={authHandler}>
        <div className="google-btn">
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src={googleIcon}
              alt="Sign In"
            />
          </div>
          <p className="btn-text"><b>Sign in with google</b></p>
        </div>
      </div>
    </>
  )
}
