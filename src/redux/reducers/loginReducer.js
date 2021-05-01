import { app, provider } from "../../firebase";

const IS_USER_LOGIN = 'IS_USER_LOGIN';

const initialState = {
  isUserLogin: false
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_USER_LOGIN:
      return {
        ...state,
        isUserLogin: action.isUserLogin
      }

    default:
      return {
        ...state
      }
  }
}

const _isUserLogin = (isUserLogin) => ({type: IS_USER_LOGIN, isUserLogin});

export const checkAuth = () => (dispatch) => {
  return new Promise((res, rej) => {
    app.auth().onAuthStateChanged(user => {
      if (user) { 
        dispatch(_isUserLogin(true))
        res()
      } else {
        rej()
      }
    })
  })
}

export const auth = () => (dispatch) => {
  return app.auth().signInWithPopup(provider).then(result => {
    dispatch(_isUserLogin(true))
  })
}