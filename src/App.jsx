import React from "react";
import Title from "./components/Title";
import ButtonContainer from "./components/ButtonContainer";

import Timer from "./components/Timer";
import Settings from "./components/Settings";
import SettingsModal from "./components/SettingsModal";
import NumberForm from "./components/NumberForm";

const App = () => {
  return (
    <>
      <Title />
      <ButtonContainer />
      <Timer />
      <Settings />
      <SettingsModal />
      {/* <NumberForm /> */}
    </>
  );
};

export default App;
