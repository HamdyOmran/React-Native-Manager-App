import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { CardSection } from "./common";
import { Actions } from "react-native-router-flux";

class ListItem extends Component {
  render() {
    const { name } = this.props.employee;

    return (
      <TouchableOpacity onPress={() => Actions.employeeEdit({employee:this.props.employee})}>
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
      </TouchableOpacity>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    flex: 1,
  },
};

export default ListItem;
