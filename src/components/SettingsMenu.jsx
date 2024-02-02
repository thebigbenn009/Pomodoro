import React from "react";
import Form from "./Form";
import FontInfo from "./FontInfo";
import ColorInfo from "./ColorInfo";
import { useDispatch } from "react-redux";
import { settingsSliceActions } from "../features/settingsSlice/settingsSlice";
// import { useDispatch, useSelector } from "react-redux";

const SettingsMenu = () => {
  const dispatch = useDispatch();
  const handleCloseSettingsMenu = () => {
    dispatch(settingsSliceActions.closeSettingsMenu());
  };
  return (
    <div className="settings-menu">
      <div className="settings-header">
        <h2>Settings</h2>
        <svg
          onClick={handleCloseSettingsMenu}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
        >
          <path
            fill="#1E213F"
            fill-rule="evenodd"
            d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z"
            opacity=".5"
          />
        </svg>
      </div>
      <span className="underline"></span>
      <div className="timer-info">
        <h3 className="info-h3">Time (minutes)</h3>
        <Form />
        <div className="underline"></div>
        <FontInfo />
        <div className="underline"></div>
        <ColorInfo />
      </div>
      {/* <button type="button" className="btn btn-apply">
        Apply
      </button> */}
    </div>
  );
};

export default SettingsMenu;
