import { checkAuth } from "../auth/thunks";
import { initializingApp } from "./actions";

const initialize = () => (dispatch) => {
  const promise = dispatch(checkAuth());

  Promise.all([promise]).then(() => {
    dispatch(initializingApp(false))
  }).catch(() => {
    dispatch(initializingApp(false))
  })
}

export {
  initialize
}