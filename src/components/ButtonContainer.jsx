import React from "react";
import Button from "./Button";

const ButtonContainer = () => {
  return (
    <div className="btn-container">
      <Button name="Pomodoro" />
      <Button name="Short Break" />
      <Button name="Long Break" />
    </div>
  );
};

export default ButtonContainer;
