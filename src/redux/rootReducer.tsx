import { combineReducers } from "@reduxjs/toolkit";
import authReducers from "./auth/authSlice";
import counterReducer from "./counter/counterSlice";
const rootReducer = combineReducers({
  auth: authReducers,
  counter: counterReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
