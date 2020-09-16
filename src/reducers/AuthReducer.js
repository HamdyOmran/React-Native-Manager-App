import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOADING,
} from "../actions/types";

const INITIAL = {
  email: "",
  password: "",
  user: null,
  error: "",
  spinner: false,
};

export default (state = INITIAL, action) => {
  console.log(action);
  switch (action.type) {
    case LOADING:
      return { ...state, spinner: true, error: "" };
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...INITIAL,
        user: action.payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: "Authentication Failed",
        password: "",
        spinner: false,
      };
    default:
      return state;
  }
};
