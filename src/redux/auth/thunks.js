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

const signOut = () => (dispatch) => {
  return app.auth().signOut().then(() => {
    dispatch(isUserLogin(false))
  })
}

export {
  checkAuth,
  authViaGoogle,
  signOut
}