import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isSettingsOpen: false,
  preferredColor: "",
  preferredFont: "",
};
export const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState,
  reducers: {
    openSettingsMenu(state) {
      state.isSettingsOpen = true;
    },
    closeSettingsMenu(state) {
      state.isSettingsOpen = false;
    },
    setpreferredFont(state, action) {
      state.preferredFont = action.payload;
    },
    setpreferredColor(state, action) {
      state.preferredColor = action.payload;
    },
    // SetTimerInputs(state, action) {
    //   const { pomodoro, shortBreak, longBreak } = action.payload;
    //   (state.pomodoroDuration = pomodoro),
    //     (state.shortBreak = shortBreak),
    //     (state.longBreak = longBreak);
    // },
  },
});
export const settingsSliceActions = settingsSlice.actions;
