import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buttonSliceActions } from "../features/buttonSlice/buttonSlice";
import { timerSliceActions } from "../features/TimerSlice/timerSlice";
const convertToCamelOrLower = (str) => {
  if (str.includes(" ")) {
    // If the string contains spaces, convert to camelCase
    let camelCaseStr = str.replace(/\s(.)/g, function (match, group1) {
      return group1.toUpperCase();
    });
    camelCaseStr = camelCaseStr.replace(/\s/g, "");
    return camelCaseStr;
  } else {
    // If the string has no spaces, convert to lowercase
    return str.toLowerCase();
  }
};

const Button = ({ name }) => {
  const dispatch = useDispatch();
  const activeClass = useSelector((state) => state.buttonSlice.activeClass);
  const preferredColor = useSelector(
    (state) => state.settingsSlice.preferredColor
  );
  const handleActiveClass = () => {
    dispatch(buttonSliceActions.setActiveClass(name));
    dispatch(
      timerSliceActions.setCurrentTimer({
        name,
        formatNameString: convertToCamelOrLower(name),
      })
    );
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
