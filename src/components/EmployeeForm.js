import React, { Component } from "react";
import { Text, Picker,View } from "react-native";
import { CardSection, Input } from "./common";
import { employeeUpdate } from "../actions";
import { connect } from "react-redux";

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Mike"
            value={this.props.name}
            onChangeText={(text) =>
              this.props.employeeUpdate({ prop: "name", value: text })
            }
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="0100*******"
            value={this.props.phone}
            onChangeText={(text) =>
              this.props.employeeUpdate({ prop: "phone", value: text })
            }
          />
        </CardSection>
        <CardSection style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 18, paddingLeft: 20 }}>Select Shift :</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={(day) =>
              this.props.employeeUpdate({ prop: "shift", value: day })
            }
            style={{ margin: 15 }}
          >
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employee;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
