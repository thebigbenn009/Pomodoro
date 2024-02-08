import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  timerRunning: false,
  restartTimer: false,
  shortBreakFlag: false,
  longBreakFlag: false,
  currentTimer: "Pomodoro",
  pomodoroTimer: "",
  shortBreakTimer: "",
  longBreakTimer: "",
  timerDuration: "",
  maxValue: "",
  shortBreakDuration: "",
  longBreakDuration: "",
};
export const timerSlice = createSlice({
  name: "timerSlice",
  initialState,
  reducers: {
    setCurrentTimer(state, action) {
      state.timerRunning = false;
      state.currentTimer = action.payload;
      if (state.currentTimer === "Pomodoro") {
        state.timerDuration = state.pomodoroTimer * 60;
        state.maxValue = state.pomodoroTimer * 60;
      } else if (state.currentTimer === "Short Break") {
        state.timerDuration = state.shortBreakTimer * 60;
        state.maxValue = state.shortBreakTimer * 60;
      } else if (state.currentTimer === "Long Break") {
        state.timerDuration = state.longBreakTimer * 60;
        state.maxValue = state.longBreakTimer * 60;
      }
    },
    setTimerInputs(state, action) {
      const { pomodoro, shortBreak, longBreak } = action.payload;
      ((state.pomodoroTimer = pomodoro),
      (state.timerDuration = pomodoro * 60),
      (state.maxValue = pomodoro * 60)),
        (state.shortBreakTimer = shortBreak),
        (state.longBreakTimer = longBreak);
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
  },
});
export const timerSliceActions = timerSlice.actions;
