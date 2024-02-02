import React from "react";
import ColorSample from "./ColorSample";

const ColorContainer = () => {
  return (
    <div className="color-container">
      <ColorSample backgroundColor="#f87070" />
      <ColorSample backgroundColor="#70f3f8" />
      <ColorSample backgroundColor="#d881f8" />
    </div>
  );
};

export default ColorContainer;
