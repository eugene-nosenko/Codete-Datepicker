import { SELECT_DATE, SET_RESERVED_TIMES_FROM_API } from "./actionTypes";
import axios from "axios";

export function createScheduleDate(date) {
  return {
    type: SELECT_DATE,
    date,
  };
}

export function addReservedTime({ times, time, selectedDate, reservedTimes }) {
  return async (dispatch) => {
    const newTimes = {
      ...times,
      [selectedDate]: [...reservedTimes, time],
    };
    try {
      await axios
        .put(`${process.env.REACT_APP_FIREBASE_DATABASE}/schedule.json`, {
          schedule: newTimes,
        })
        .then((response) => {
          dispatch(setReservedTimesFromApi(response.data.schedule));
        });
    } catch (e) {
      dispatch((e) => console.log(e));
    }
  };
}

export function getAllReservedTime() {
  return async (dispatch) => {
    try {
      axios
        .get(`${process.env.REACT_APP_FIREBASE_DATABASE}/schedule.json`)
        .then((response) => {
          dispatch(setReservedTimesFromApi(response.data.schedule));
        });
    } catch (e) {
      dispatch((e) => console.log(e));
    }
  };
}

export function setReservedTimesFromApi(times) {
  return {
    type: SET_RESERVED_TIMES_FROM_API,
    times,
  };
}
