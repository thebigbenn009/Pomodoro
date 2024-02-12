import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  timerRunning: false,
  restartTimer: false,

  currentTimer: "Pomodoro",

  pomodoroTimer: 0,
  shortBreakTimer: 0,
  longBreakTimer: 0,
  timerDuration: "",
  maxValue: "",
  // New fields for tracking elapsed time and timer running state
  pomodoroPaused: false,
  shortBreakPaused: false,
  longBreakPaused: false,
  pomodoroElapsedTime: 0,
  shortBreakElapsedTime: 0,
  longBreakElapsedTime: 0,
  pomodoroRunning: false,
  shortBreakRunning: false,
  longBreakRunning: false,
};
export const timerSlice = createSlice({
  name: "timerSlice",
  initialState,
  reducers: {
    pauseTimer(state) {
      if (state.currentTimer === "Pomodoro") {
        state.pomodoroPaused = true;
        state.pomodoroElapsedTime = state.timerDuration;
      }
      if (state.currentTimer === "Short Break") {
        state.shortBreakPaused = true;
        state.shortBreakElapsedTime = state.timerDuration;
      }
      if (state.currentTimer === "Long Break") {
        state.longBreakPaused = true;
        state.longBreakElapsedTime = state.timerDuration;
      }
      state.timerRunning = false;
    },
    setCurrentTimer(state, action) {
      const { name } = action.payload;
      const selectedTimer = name;

      //pausing the timer if it is currently running
      if (state.timerRunning) {
        state.timerRunning = false;
      }
      // set the current timer
      state.currentTimer = selectedTimer;
      if (state.currentTimer === "Pomodoro") {
        state.timerDuration = state.pomodoroPaused
          ? state.pomodoroElapsedTime
          : state.pomodoroTimer * 60;
        state.maxValue = state.pomodoroTimer * 60;
      } else if (state.currentTimer === "Short Break") {
        (state.timerDuration = state.shortBreakPaused
          ? state.shortBreakElapsedTime
          : state.shortBreakTimer * 60),
          (state.maxValue = state.shortBreakTimer * 60);
      } else if (state.currentTimer === "Long Break") {
        state.timerDuration = state.longBreakPaused
          ? state.longBreakElapsedTime
          : state.longBreakTimer * 60;
        state.maxValue = state.longBreakTimer * 60;
      }
    },
    setTimerInputs(state, action) {
      const { pomodoro, shortBreak, longBreak } = action.payload;
      state.pomodoroTimer = pomodoro;
      state.shortBreakTimer = shortBreak;
      state.longBreakTimer = longBreak;
      if (state.currentTimer === "Pomodoro") {
        state.timerDuration = pomodoro * 60;
        state.maxValue = pomodoro * 60;
      } else if (state.currentTimer === "Short Break") {
        state.timerDuration = shortBreak * 60;
        state.maxValue = shortBreak * 60;
      } else if (state.currentTimer === "Long Break") {
        state.timerDuration = longBreak * 60;
        state.maxValue = longBreak * 60;
      }
    },
    reduceTimerPerSecond(state) {
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

    startTimer(state) {
      state.timerRunning = true;
      state.restartTimer = false;

      if (state.currentTimer === "Pomodoro") {
        state.shortBreakRunning = false;
        state.longBreakRunning = false;
        state.pomodoroRunning = false;
        (state.pomodoroPaused = false), (state.pomodoroRunning = true);
      }
      if (state.currentTimer === "Short Break") {
        state.shortBreakRunning = false;
        state.longBreakRunning = false;
        state.pomodoroRunning = false;
        state.shortBreakPaused = false;
        state.shortBreakRunning = true;
      }
      if (state.currentTimer === "Long Break") {
        state.shortBreakRunning = false;
        state.longBreakRunning = false;
        state.pomodoroRunning = false;
        state.longBreakPaused = false;
        state.longBreakRunning = true;
      }
    },
    stopTimer(state) {
      state.timerRunning = false;
    },
  },
});
export const timerSliceActions = timerSlice.actions;
