import { SELECT_DATE, SET_RESERVED_TIMES_FROM_API } from "./actionTypes";

export function createScheduleDate(date) {
  console.log("action", date);
  return {
    type: SELECT_DATE,
    date,
  };
}

export function setReservedTimesFromApi(times) {
  return {
    type: SET_RESERVED_TIMES_FROM_API,
    times,
  };
}
