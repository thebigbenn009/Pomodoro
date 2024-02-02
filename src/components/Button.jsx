import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buttonSliceActions } from "../features/buttonSlice/buttonSlice";

const Button = ({ name }) => {
  const dispatch = useDispatch();
  const activeClass = useSelector((state) => state.buttonSlice.activeClass);
  const handleActiveClass = () => {
    dispatch(buttonSliceActions.setActiveClass(name));
  };
  return (
    <button
      type="button"
      onClick={handleActiveClass}
      className={`btn btn-name ${activeClass === name ? "active-class" : ""}`}
    >
      {name}
    </button>
  );
};

export default Button;
