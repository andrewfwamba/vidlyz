import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const FormInput = (props) => {
  const { placeholder, label } = props;
  return (
    <>
      <Text style={{ fontWeight: "bold" }}>{label}</Text>
      <TextInput {...props} placeholder={placeholder} style={styles.input} />
    </>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: "85%",
    backgroundColor: "rgba(122, 111, 228, 0.2)",
    padding: 5,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
    borderWidth: 0.6,
  },
});
