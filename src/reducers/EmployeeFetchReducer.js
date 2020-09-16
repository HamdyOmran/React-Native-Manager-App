import { EMPLOYEES_FETCH } from "../actions/types";

const INITIAL = {};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH:
      return action.payload;
    default:
      return state;
  }
};
