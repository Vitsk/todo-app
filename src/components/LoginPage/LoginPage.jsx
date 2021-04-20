import React from 'react'
import { SignInButton } from '../SignInButton/SignInButton'
import './LoginPage.css'

export const LoginPage = ({ authHandler }) => {
  return (
    <>
      <h1 className="App-header">Welcome to Todo app</h1>
      <SignInButton
        className="signUpBtn"
        authHandler={authHandler}
      />
    </>
  )
}
