import React from 'react'
import { SignInButton } from './SignInButton/SignInButton'

export const LoginPage = ({ authHandler }) => {

  return (
    <>
      <div className="container">
        <div className="d-flex flex-column align-items-center">
          <h1 className="App-header">Welcome to Todo app</h1>
          <SignInButton
            className="signUpBtn"
            authHandler={authHandler}
          />
        </div>
      </div>
    </>
  )
}
