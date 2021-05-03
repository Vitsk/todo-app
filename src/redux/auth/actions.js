import { IS_USER_LOGIN } from "./actionCreators";

const isUserLogin = (isUserLogin) => ({type: IS_USER_LOGIN, isUserLogin});

export {
  isUserLogin
}