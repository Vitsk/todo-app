import { checkAuth } from "./loginReducer";

const INITIALIZING_APP = 'INITIALIZING_APP';

const initialState = {
  initializingApp: true,
}

export const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZING_APP:
      return {
        ...state,
        initializingApp: action.initializingApp
      }

    default:
      return {
        ...state
      }
  }
}

const _initializingApp = (initializingApp) => ({type: INITIALIZING_APP, initializingApp})

export const initialize = () => async (dispatch) => {
  const promise = dispatch(checkAuth());

  Promise.all([promise]).then(() => {
    dispatch(_initializingApp(false))
  })
}