import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOADING,
  } from "./types";
  import firebase from "firebase";
  import { Actions } from "react-native-router-flux";
  
  export const emailChanged = (text) => {
    return { type: EMAIL_CHANGED, payload: text };
  };
  
  export const passwordChanged = (text) => {
    return { type: PASSWORD_CHANGED, payload: text };
  };
  
  export const loginUser = ({ email, password }) => {
    return (dispatch) => {
      dispatch({ type: LOADING });
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          dispatch({ type: LOGIN_SUCCESS, payload: user });
          Actions.main();
        })
        .catch(() => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
              dispatch({ type: LOGIN_SUCCESS, payload: user });
            })
            .catch(() => {
              dispatch({ type: LOGIN_FAILED });
            });
        });
    };
  };
  