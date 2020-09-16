import { EMPLOYEE_UPDATE, RESET } from "../actions/types";

const INITIAL = {
  name: "",
  phone: "",
  shift: "",
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case RESET:
      return INITIAL;
    default:
      return state;
  }
};
