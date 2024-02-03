import React, { useEffect } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { useDispatch, useSelector } from "react-redux";
import { timerSliceActions } from "../features/TimerSlice/timerSlice";

const Timer = () => {
  const dispatch = useDispatch();
  const timerDuration = useSelector((state) => state.timerSlice.timerDuration);
  const preferredColor = useSelector(
    (state) => state.settingsSlice.preferredColor
  );
  const restartTimer = useSelector((state) => state.timerSlice.restartTimer);
  const maxValue = useSelector((state) => state.timerSlice.maxValue);
  const timerRunning = useSelector((state) => state.timerSlice.timerRunning);
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  useEffect(() => {
    //create a vaiable for the timer function
    let intervalId;
    if (timerRunning) {
      //let the setInterval function run every 1000ms
      intervalId = setInterval(() => {
        dispatch(timerSliceActions.reduceTimerPerSecond());
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [timerRunning]);
  const handleStartTimer = () => {
    dispatch(timerSliceActions.startTimer());
  };
  return (
    <>
      <figure className="timer-container" style={{ width: 410, height: 410 }}>
        <CircularProgressbar
          maxValue={maxValue}
          value={timerDuration}
          strokeWidth={3}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#161932",
            strokeLinecap: "round",
            textColor: "red",
            // pathColor: "#F87070",
            pathColor: `${preferredColor}`,
            trailColor: "transparent",
            pathTransitionDuration: 0.5,
          })}
        />
        <div className="timer-option">
          <h1>{formatTime(timerDuration)}</h1>
          {restartTimer ? (
            <p onClick={handleStartTimer}>restart</p>
          ) : (
            <p onClick={handleStartTimer}>start</p>
          )}
        </div>
      </figure>
    </>
  );
};

export default Timer;
