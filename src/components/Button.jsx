import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buttonSliceActions } from "../features/buttonSlice/buttonSlice";
import { timerSliceActions } from "../features/TimerSlice/timerSlice";

const Button = ({ name }) => {
  const dispatch = useDispatch();
  const activeClass = useSelector((state) => state.buttonSlice.activeClass);
  const preferredColor = useSelector(
    (state) => state.settingsSlice.preferredColor
  );
  const handleActiveClass = () => {
    dispatch(buttonSliceActions.setActiveClass(name));
    dispatch(timerSliceActions.setCurrentTimer(name));
  };
  return (
    <button
      style={{
        backgroundColor: activeClass === name ? `${preferredColor}` : "",
      }}
      type="button"
      onClick={handleActiveClass}
      className={`btn btn-name ${activeClass === name ? "active-class" : ""}`}
    >
      {name}
    </button>
  );
};

export default Button;
