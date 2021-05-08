import { app, provider } from "../../firebase"
import { isUserLogin, setUserId } from "./actions"

const checkAuth = () => (dispatch) => {
  return new Promise((res, rej) => {
    app.auth().onAuthStateChanged(user => {
      if (user) { 
        dispatch(isUserLogin(true))
        dispatch(setUserId(user.uid))
        res()
      } else {
        rej()
      }
    })
  })
}

const authViaGoogle = () => (dispatch) => {
  return app.auth().signInWithPopup(provider).then((result) => {
    dispatch(isUserLogin(true))
    dispatch(setUserId(result.user.uid))
  })
}

const signOut = () => (dispatch) => {
  return app.auth().signOut().then(() => {
    dispatch(isUserLogin(false))
    dispatch(setUserId(''))
  })
}

export {
  checkAuth,
  authViaGoogle,
  signOut
}