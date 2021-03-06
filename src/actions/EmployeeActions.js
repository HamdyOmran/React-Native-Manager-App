import { EMPLOYEE_UPDATE, RESET, EMPLOYEES_FETCH } from "../actions/types";
import firebase from "firebase";
import { Actions } from "react-native-router-flux";

export const employeeUpdate = ({ prop, value }) => {
  return { type: EMPLOYEE_UPDATE, payload: { prop, value } };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: RESET });
        Actions.pop();
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`users/${currentUser.uid}/employees`)
      .on("value", (snapshot) => {
        dispatch({ type: EMPLOYEES_FETCH, payload: snapshot.val() });
      });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase
      .database()
      .ref(`users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: RESET });
        Actions.pop();
      });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  return () => {
    firebase
      .database()
      .ref(`users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(Actions.pop());
  };
};
