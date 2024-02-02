import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  activeClass: "Pomodoro",
};
export const buttonSlice = createSlice({
  name: "buttonSlice",
  initialState,
  reducers: {
    setActiveClass(state, action) {
      state.activeClass = action.payload;
    },
  },
});

export const buttonSliceActions = buttonSlice.actions;
