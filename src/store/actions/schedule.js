import { CREATE_SCHEDULE_DATE, CREATE_SCHEDULE_TIME } from "./actionTypes";

export function createScheduleDate(date) {
  console.log("action", date);
  return {
    type: CREATE_SCHEDULE_DATE,
    date,
  };
}

export function createScheduleTime(time) {
  return {
    type: CREATE_SCHEDULE_TIME,
  };
}
