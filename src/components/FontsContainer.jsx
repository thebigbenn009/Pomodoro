import React from "react";
import FontSample from "./FontSample";

const FontsContainer = () => {
  return (
    <div className="fonts-container">
      <FontSample
        backgroundColor="#161932"
        color="#fff"
        fontFamily="Kumbh Sans"
      />
      <FontSample backgroundColor="#eff1fa" fontFamily="Roboto Slab" />
      <FontSample backgroundColor="#d7e0ff" fontFamily="Space Mono" />
    </div>
  );
};

export default FontsContainer;
