import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../rootReducer";

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      console.log("triggered in");
      state.count = state.count + 1;
    },
    decrement: (state) => {
      console.log("triggered dece");
      state.count = state.count - 1;
    },
    setCount: (state, { payload }: PayloadAction<number>) => {
      state.count = payload;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
export const counterSelector = (state: RootState) => state.counter;
