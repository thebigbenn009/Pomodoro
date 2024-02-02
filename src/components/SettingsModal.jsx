import React from "react";
import SettingsMenu from "./SettingsMenu";
import { useDispatch, useSelector } from "react-redux";
const SettingsModal = () => {
  const isSettingsOpen = useSelector(
    (state) => state.settingsSlice.isSettingsOpen
  );
  return (
    isSettingsOpen && (
      <div className="modal-overlay">
        <SettingsMenu />
      </div>
    )
  );
};

export default SettingsModal;
