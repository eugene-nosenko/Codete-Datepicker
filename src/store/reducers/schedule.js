import {
  CREATE_SCHEDULE_DATE,
  CREATE_SCHEDULE_TIME,
} from "../actions/actionTypes";

const initialState = {
  dates: [],
  times: [],
};

export default function schedule(state = initialState, action) {
  switch (action.type) {
    case CREATE_SCHEDULE_DATE:
      return {
        ...state,
        dates: [...state.dates, action.date],
      };

    case CREATE_SCHEDULE_TIME:
      return {
        ...state,
        times: [...state.times, action.time],
      };

    default:
      return state;
  }
}
