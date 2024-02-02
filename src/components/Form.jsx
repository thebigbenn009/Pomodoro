import React, { useState } from "react";
import { useForm } from "react-hook-form";
import NumberForm from "./NumberForm";
import { useDispatch, useSelector } from "react-redux";
import { settingsSliceActions } from "../features/settingsSlice/settingsSlice";
import { timerSliceActions } from "../features/TimerSlice/timerSlice";

const Form = () => {
  const restartTimer = useSelector((state) => state.timerSlice.restartTimer);
  const preferredColor = useSelector(
    (state) => state.settingsSlice.preferredColor
  );
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    defaultValues: {
      pomodoro: 1,
      shortBreak: 1,
      longBreak: 1,
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    dispatch(timerSliceActions.setTimerInputs(data));
    dispatch(settingsSliceActions.closeSettingsMenu());
  };

  const handleIncreaseNumber = (name) => {
    const currNum = parseInt(watch(name));
    setValue(name, currNum + 1);
  };
  //   const handleIncreaseNumber = () => {
  //     const currNum = parseInt(watch("pomodoro"));
  //     setValue("pomodoro", currNum + 1);
  //   };

  //   const handleDecreaseNumber = () => {
  //     const currNum = parseInt(watch("pomodoro"));
  //     if (currNum > 1) {
  //       setValue("pomodoro", currNum - 1);
  //     } else {
  //       reset({
  //         pomodoro: 1,
  //       });
  //       alert("Timer must be 1 minute and above");
  //     }
  //   };

  const handleDecreaseNumber = (name, resetObject) => {
    const currNum = parseInt(watch(name));
    if (currNum > 1) {
      setValue(name, currNum - 1);
    } else {
      reset(resetObject);
      alert(`${name} must be 1 minute and above`);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "ArrowDown") {
      return handleDecreaseNumber();
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <NumberForm
        inputName="Pomodoro"
        register={{
          ...register("pomodoro", {
            required: "This input is required",
            pattern: {
              value: /\d+/,
              message: "This input is number only.",
            },
            min: {
              value: 1,
              message: "for where?",
            },
            valueAsNumber: true,
          }),
        }}
        handleKeyPress={() => handleKeyPress()}
        handleIncreaseNumber={() => handleIncreaseNumber("pomodoro")}
        handleDecreaseNumber={() =>
          handleDecreaseNumber("pomodoro", { pomodoro: 1 })
        }
        errors={errors}
      />
      <NumberForm
        inputName="short break"
        register={{
          ...register("shortBreak", {
            required: "This input is required",
            pattern: {
              value: /\d+/,
              message: "This input is number only.",
            },
            min: {
              value: 1,
              message: "for where?",
            },
            valueAsNumber: true,
          }),
        }}
        handleKeyPress={() => handleKeyPress}
        handleIncreaseNumber={() => handleIncreaseNumber("shortBreak")}
        handleDecreaseNumber={() =>
          handleDecreaseNumber("shortBreak", { shortBreak: 1 })
        }
        errors={errors}
      />
      <NumberForm
        inputName="long break"
        register={{
          ...register("longBreak", {
            required: "This input is required",
            pattern: {
              value: /\d+/,
              message: "This input is number only.",
            },
            min: {
              value: 1,
              message: "for where?",
            },
            valueAsNumber: true,
          }),
        }}
        handleKeyPress={() => handleKeyPress}
        handleIncreaseNumber={() => handleIncreaseNumber("longBreak")}
        handleDecreaseNumber={() =>
          handleDecreaseNumber("longBreak", { longBreak: 1 })
        }
        errors={errors}
      />
      <button
        type="submit"
        className="btn btn-apply"
        style={{ backgroundColor: preferredColor === "" ? "" : preferredColor }}
      >
        Apply
      </button>
    </form>
  );
};

export default Form;
