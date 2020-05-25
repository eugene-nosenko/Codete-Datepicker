import React from "react";
import TextField from "@material-ui/core/TextField";

const times = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

const TimeSlot = ({ value, chooseTime, reservedTimes }) => (
  <TextField
    type="button"
    value={value}
    onClick={chooseTime}
    className={"time-slot"}
    disabled={reservedTimes.includes(value)}
  />
);

const Timepicker = ({ reservedTimes, chooseTime }) => {
  console.log(reservedTimes);
  return (
    <div className={"time-list"}>
      {times.map((time, key) => (
        <TimeSlot
          key={key}
          value={time}
          reservedTimes={reservedTimes || []}
          chooseTime={(event) => chooseTime(event.target.value)}
        />
      ))}
    </div>
  );
};

export default Timepicker;
