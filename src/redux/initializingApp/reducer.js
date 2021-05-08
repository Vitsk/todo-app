import { INITIALIZING_APP } from './actionCreators'

const initialState = {
  initializingApp: true,
}

const initialReducer = (state = initialState, action) => {
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

export default initialReducer;