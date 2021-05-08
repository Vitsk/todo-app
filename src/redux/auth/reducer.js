import { 
  IS_USER_LOGIN,
  SET_USER_ID
} from './actionCreators'

const initialState = {
  isUserLogin: false,
  userId: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_USER_LOGIN:
      return {
        ...state,
        isUserLogin: action.isUserLogin
      }

    case SET_USER_ID:
      return {
        ...state,
        userId: action.userId
      }

    default:
      return {
        ...state
      }
  }
}

export default authReducer;