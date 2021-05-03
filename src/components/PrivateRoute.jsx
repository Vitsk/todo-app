import React from 'react'
import { Redirect, Route } from 'react-router'

export const PrivateRoute = ({ children, isUserLogin, ...rest }) => {
  return (
    <>
      <Route {...rest} render={() => {
        return isUserLogin === true 
          ? children
          : <Redirect to={'/'} />
      }} />
    </>
  )
}
