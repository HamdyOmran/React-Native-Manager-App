import React from "react";
import { CardSection } from "./CardSection";
import { Button } from "./Button";
import { Text, View, Modal, StyleSheet } from "react-native";

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { cardSectionStyle, textStyle, containerStyle } = styles;
  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: "center",
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    lineHeight: 40,
    textAlign: "center",
  },
  containerStyle: {
    position: "relative",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
  },
});

export { Confirm };
