import {
  SELECT_DATE,
  SET_RESERVED_TIMES_FROM_API,
} from "../actions/actionTypes";

const initialState = {
  selectedDate: null,
  times: {},
};

export default function schedule(state = initialState, action) {
  switch (action.type) {
    case SELECT_DATE:
      return {
        ...state,
        selectedDate: action.date,
      };

    case SET_RESERVED_TIMES_FROM_API: {
      return {
        ...state,
        times: action.times,
      };
    }

    default:
      return state;
  }
}
