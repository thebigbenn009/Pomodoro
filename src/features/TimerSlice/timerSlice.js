import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  timerRunning: false,
  restartTimer: false,
  timerDuration: "",
  maxValue: "",
  shortBreakDuration: "",
  longBreakDuration: "",
};
export const timerSlice = createSlice({
  name: "timerSlice",
  initialState,
  reducers: {
    setTimerInputs(state, action) {
      const { pomodoro, shortBreak, longBreak } = action.payload;
      (state.timerDuration = pomodoro * 60),
        (state.shortBreakDuration = shortBreak),
        (state.longBreakDuration = longBreak),
        (state.maxValue = pomodoro * 60);
    },
    reduceTimerPerSecond(state, action) {
      if (state.timerDuration > 0) {
        state.timerDuration -= 1;
      } else if (state.timerDuration === 0) {
        state.timerDuration = state.maxValue;

        state.timerRunning = false;
        state.restartTimer = true;
      } else {
        state.timerRunning = false;
      }
    },
    startTimer(state, action) {
      state.timerRunning = true;
      state.restartTimer = false;
    },
    stopTimer(state, action) {
      state.timerRunning = false;
    },
    // resetTImerDuration(state, action) {
    //   state.timerDuration = state.maxValue;
    // },
  },
});
export const timerSliceActions = timerSlice.actions;
