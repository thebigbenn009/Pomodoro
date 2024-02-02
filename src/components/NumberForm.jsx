import React from "react";
import { ErrorMessage } from "@hookform/error-message";

const NumberForm = ({
  inputName,
  register,
  handleKeyPress,
  handleDecreaseNumber,
  handleIncreaseNumber,
  errors,
}) => {
  return (
    <div className="form-control">
      <label htmlFor="pomodoro">{inputName}</label>
      <div className="number-input">
        <input
          id={inputName}
          type="number"
          {...register}
          //   {...register("pomodoro", {
          //     required: "This input is required",
          //     pattern: {
          //       value: /\d+/,
          //       message: "This input is number only.",
          //     },
          //     min: {
          //       value: 1,
          //       message: "for where?",
          //     },
          //     valueAsNumber: true,
          //   })}
          onKeyDown={handleKeyPress}
        />
        <ErrorMessage
          errors={errors}
          name={inputName}
          render={({ messages }) => {
            console.log("messages", messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p className="error" key={type}>
                    {message}
                  </p>
                ))
              : null;
          }}
        />
        <svg
          onClick={handleIncreaseNumber}
          className="arrow-up"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="7"
        >
          <path
            fill="none"
            stroke="#1E213F"
            stroke-opacity=".25"
            stroke-width="2"
            d="M1 6l6-4 6 4"
          />
        </svg>
        <svg
          onClick={handleDecreaseNumber}
          className="arrow-down"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="7"
        >
          <path
            fill="none"
            stroke="#1E213F"
            stroke-opacity=".25"
            stroke-width="2"
            d="M1 1l6 4 6-4"
          />
        </svg>
      </div>
    </div>
  );
};

export default NumberForm;
