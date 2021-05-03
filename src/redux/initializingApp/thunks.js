import { checkAuth } from "../auth/thunks";
import { initializingApp } from "./actions";

const initialize = () => async (dispatch) => {
  const promise = dispatch(checkAuth());

  Promise.all([promise]).then(() => {
    dispatch(initializingApp(false))
  })
}

export {
  initialize
}