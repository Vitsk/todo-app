import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from 'redux-thunk';
import initializingApp from "./initializingApp/reducer";
import auth from "./auth/reducer";
import tasksReducer from "./tasks/reducer";

const reducers = combineReducers({
  initializingApp,
  auth,
  tasksReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));