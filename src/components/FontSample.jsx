import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { settingsSliceActions } from "../features/settingsSlice/settingsSlice";

const FontSample = ({ backgroundColor, fontFamily, color = "#333" }) => {
  const dispatch = useDispatch();
  const preferredFont = useSelector(
    (state) => state.settingsSlice.preferredFont
  );
  const handlePreferredFont = () => {
    dispatch(settingsSliceActions.setpreferredFont(fontFamily));
  };
  return (
    <div
      className="font-sample"
      onClick={handlePreferredFont}
      style={{
        backgroundColor: backgroundColor,
        fontFamily: fontFamily,
        color: color,
      }}
    >
      <p>
        <span>A</span>
        <span>a</span>
      </p>
    </div>
  );
};

export default FontSample;
