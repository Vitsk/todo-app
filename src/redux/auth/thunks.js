import { app, provider } from "../../firebase"
import { isUserLogin } from "./actions"

const checkAuth = () => (dispatch) => {
  return new Promise((res, rej) => {
    app.auth().onAuthStateChanged(user => {
      if (user) { 
        dispatch(isUserLogin(true))
        res()
      } else {
        rej()
      }
    })
  })
}

const authViaGoogle = () => (dispatch) => {
  return app.auth().signInWithPopup(provider).then(result => {
    dispatch(isUserLogin(true))
  })
}

export {
  checkAuth,
  authViaGoogle
}