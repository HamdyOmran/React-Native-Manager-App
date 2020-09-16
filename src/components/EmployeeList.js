import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { connect } from "react-redux";
import { employeesFetch } from "../actions";
import _ from "lodash";
import ListItem from "./ListItem";

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  render() {
    return (
        <FlatList
          data={this.props.employees}
          keyExtractor={(item) => item.uid}
          renderItem={({item}) => {
            return <ListItem employee={item} />
          }}
        />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = Object.keys(state.employees).map((employeeId) => {
    return Object.assign({}, state.employees[employeeId], { uid: employeeId });
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
