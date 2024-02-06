import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  timerRunning: false,
  restartTimer: false,
  shortBreakFlag: false,
  longBreakFlag: false,
  currentTimer: "Pomodoro",
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
      if (state.currentTimer === "Pomodoro") {
        state.timerDuration = pomodoro * 60;
        //    state.maxValue = pomodoro * 60;
      } else if (state.currentTimer === "Short Break") {
        state.timerDuration = shortBreak * 60;
        state.maxValue = shortBreak * 60;
      } else if (state.currentTimer === "Long Break") {
        state.timerDuration = longBreak * 60;
        state.maxValue = longBreak * 60;
      }
      //  (state.timerDuration = pomodoro * 60),
      //    (state.shortBreakDuration = shortBreak),
      //    (state.longBreakDuration = longBreak),
      state.maxValue = pomodoro * 60;
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
    setCurrentTimer(state, action) {
      state.currentTimer = action.payload;
    },
    //     setActiveTimer(state, action) {
    //       if (action.payload === "Short Break") {
    //         state.shortBreakFlag = true;
    //         state.longBreakFlag = false;
    //       }
    //       if (action.payload === "Long Break") {
    //         state.longBreakFlag = true;
    //         state.shortBreakFlag = false;
    //       } else {
    //         state.longBreakFlag = false;
    //         state.shortBreakFlag = false;
    //       }
    //     },
    //     setLongBreakTimer(state, action) {
    //       state.longBreakFlag = true;
    //       state.shortBreakFlag = false;
    //     },
  },
});
export const timerSliceActions = timerSlice.actions;
