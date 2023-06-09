import { configureStore, Action } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ThunkAction } from "@reduxjs/toolkit";
import rootReducer, { RootState } from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export default store;
