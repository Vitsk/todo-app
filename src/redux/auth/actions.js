import { 
  IS_USER_LOGIN,
  SET_USER_ID
} from "./actionCreators";

const isUserLogin = (isUserLogin) => ({type: IS_USER_LOGIN, isUserLogin});
const setUserId = (userId) => ({type: SET_USER_ID, userId});

export {
  isUserLogin,
  setUserId
}