import React from 'react'
import { Redirect, Route } from 'react-router'

export const PrivateRoute = ({ children, user, ...rest }) => {
  console.log(user)

  return (
    <>
      <Route
        {...rest}
      >
        {user ? (
            children
          ) : (
            <Redirect
              to={'/'}
            />
          )}
      </Route>
    </>
  )
}
