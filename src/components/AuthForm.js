import React, { Component } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { connect } from "react-redux";
import firebase from "firebase";
import { Actions } from "react-native-router-flux";

class AuthForm extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDo--smG_R64hl3AcZcja9NCIVr26rnwOk",
      authDomain: "manager-482bd.firebaseapp.com",
      databaseURL: "https://manager-482bd.firebaseio.com",
      projectId: "manager-482bd",
      storageBucket: "manager-482bd.appspot.com",
      messagingSenderId: "841534280293",
      appId: "1:841534280293:web:a96f05e1b9b719ea6f2c8c",
    });

    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     Actions.main();
    //   }
    // });
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  render() {
    return (
      <View style={{ justifyContent:"center",flex:1 }}>
        <Spacer>
          <Text h4>Log In</Text>
        </Spacer>
        <Spacer>
          <Input
            label="Email"
            value={this.props.email}
            onChangeText={this.onEmailChange.bind(this)}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </Spacer>
        <Spacer>
          <Input
            secureTextEntry
            label="Password"
            value={this.props.password}
            onChangeText={this.onPasswordChange.bind(this)}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </Spacer>
        {this.props.errorMessage ? (
          <Spacer>
            <Text style={styles.errorMessage}>{this.props.errorMessage}</Text>
          </Spacer>
        ) : null}

        {this.props.spinner ? (
          <Spacer>
            <ActivityIndicator size="small" />
          </Spacer>
        ) : (
          <Spacer>
            <Button title="Log in" onPress={this.onButtonPress.bind(this)} />
          </Spacer>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 10,
  },
});

// AuthForm.navigationOptions = () => {
//   return {
//     header: () => {
//       false;
//     },
//   };
// };

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    errorMessage: state.auth.error,
    spinner: state.auth.spinner,
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(AuthForm);
