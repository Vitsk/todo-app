import { IS_USER_LOGIN } from './actionCreators'

const initialState = {
  isUserLogin: false
}

const authReducer = (state = initialState, action) => {
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

export default authReducer;