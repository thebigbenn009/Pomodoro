import { configureStore } from "@reduxjs/toolkit";
import {
  buttonSlice,
  buttonSliceActions,
} from "./features/buttonSlice/buttonSlice";
import { settingsSlice } from "./features/settingsSlice/settingsSlice";
import { timerSlice } from "./features/TimerSlice/timerSlice";
const store = configureStore({
  reducer: {
    buttonSlice: buttonSlice.reducer,
    settingsSlice: settingsSlice.reducer,
    timerSlice: timerSlice.reducer,
  },
});
export default store;
