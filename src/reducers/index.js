import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import EmployeeReducer from "./EmployeeReducer";
import EmployeeFetchReducer from "./EmployeeFetchReducer";
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Remote debugger", "Setting a timer"]);

export default combineReducers({
  auth: AuthReducer,
  employee: EmployeeReducer,
  employees: EmployeeFetchReducer,
});
