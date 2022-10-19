import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

const Button = ({ onPress, text, inverted }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        Styles.container,
        { backgroundColor: inverted ? "#ffffff" : "#444444" },
      ]}
    >
      <Text style={[StyleSheet.text, { color: inverted ? "black" : "white" }]}>
        {text}
      </Text>
    </Pressable>
  );
};
const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
    width: 340,
    height: 54,
    marginLeft: 19,
    padding: 15,
    marginTop: 20,
    borderWidth: 1,
  },
  // text: {
  //  width: 340,
  //height: 57,
  // borderColor: "black",
  //},
});

export default Button;
