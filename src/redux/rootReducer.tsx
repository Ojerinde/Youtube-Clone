import { combineReducers } from "@reduxjs/toolkit";
import authReducers from "./auth/authSlice";
import videosReducer from "./videos/videosSlice";
const rootReducer = combineReducers({
  auth: authReducers,
  videos: videosReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
