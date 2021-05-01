import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from 'redux-thunk';
import { initialReducer } from "./reducers/initialReducer";
import { loginReducer } from "./reducers/loginReducer";

const reducers = combineReducers({
  initialReducer,
  loginReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));