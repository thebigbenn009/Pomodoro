import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { settingsSliceActions } from "../features/settingsSlice/settingsSlice";

const ColorSample = ({ backgroundColor }) => {
  const preferredColor = useSelector(
    (state) => state.settingsSlice.preferredColor
  );
  const dispatch = useDispatch();
  const handlePreferredColor = () => {
    dispatch(settingsSliceActions.setpreferredColor(backgroundColor));
  };
  return (
    <div
      onClick={handlePreferredColor}
      className="color-sample"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div
        className="check"
        style={{
          width: preferredColor === backgroundColor && "10px",
          height: preferredColor === backgroundColor && "20px",
          opacity: preferredColor === backgroundColor && "1",
          transitionDelay: preferredColor === backgroundColor && "0s",
        }}
      ></div>
    </div>
  );
};

export default ColorSample;
