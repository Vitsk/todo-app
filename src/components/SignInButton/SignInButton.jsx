import React from 'react';
import './SignInButton.css';
import googleIcon from '../../assets/img/google-icon.png'

export const SignInButton = ({className}) => {
  return (
    <>
      <div className={className}>
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
