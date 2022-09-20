import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducers,
  userRegisterReducers,
} from "./reducers/userReducers";
import { allMedReducers } from "./reducers/medReducers";

const finalReducers = combineReducers({
  userRegisterReducers: userRegisterReducers,
  userLoginReducers: userLoginReducers,
  allMedReducers: allMedReducers,
});

const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  userLoginReducers: {
    user: user,
  },
};

const composeEnchansers = composeWithDevTools({});

const store = createStore(
  finalReducers,
  initialState,
  composeEnchansers(applyMiddleware(thunk))
);

export default store;
