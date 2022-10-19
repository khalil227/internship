import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Input = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  cb,
  onChange,
  keyboardType,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        onChangeText={(text) => {
          // console.log(text);
          keyboardType(text);
          cb(text);
          // text.includes("@gmail.com");
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 49,
    width: "90%",
    marginTop: 5,
    backgroundColor: "#EEE",
    borderRadius: 15,
    marginVertical: 10,
    paddingHorizontal: 10,
    marginLeft: 20,
  },
  input: {
    width: "90%",
    marginLeft: 10,
  },
});
export default Input;
