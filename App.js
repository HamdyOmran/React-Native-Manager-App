import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/reducers";
import ReduxThunk from "redux-thunk";
import Router from "./src/Router";

// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//   },
//   {
//     initialRouteName: "Home",
//     defaultNavigationOption: {
//       title: "Manager",
//     },
//   }
// );

// const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <Router />
    </Provider>
  );
};
