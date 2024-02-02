import React, { useEffect, useState } from "react";

const Timer = () => {
  const [duration, setDuration] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (timerRunning) {
      //If timer is running, setInterval function to run every 1 second
      intervalId = setInterval(() => {
        if (duration > 0) {
          //if current duration is greater than 0, set the duration to be current duration - 1
          setDuration(duration - 1);
        } else {
          //if current duration is = 0, clear the interval function and set timer to false
          clearInterval(intervalId);
          setTimerRunning(false);
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [duration, timerRunning]);

  const startTimer = () => {
    setDuration(5 * 60); // 5 minutes initially, change this to whatever duration you need
    setTimerRunning(true);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div>
      <div>Time: {formatTime(duration)}</div>
      <button onClick={startTimer} disabled={timerRunning}>
        Start
      </button>
    </div>
  );
};

export default Timer;
