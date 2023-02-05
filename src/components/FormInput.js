import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Colors } from "../utils/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const FormInput = (props) => {
  const { placeholder, error, iconName, onFocus = () => {} } = props;
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View
      style={[
        styles.inputWrapper,
        {
          borderColor: error
            ? "red"
            : isFocused
            ? Colors.darkText
            : "rgba(155, 146, 220, .3)",
        },
      ]}
    >
      <Icon name={iconName} style={{ color: "gray", fontSize: 22 }} />
      <TextInput
        autoCorrect={false}
        {...props}
        placeholder={placeholder}
        style={styles.input}
        onFocus={() => {
          onFocus();
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputWrapper: {
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 10,
    borderWidth: 0.6,
    marginTop: 5,
    borderColor: "rgba(155, 146, 220, .3)",
    overflow: "hidden",
  },
  input: {
    flex: 1,
    padding: 5,
    borderRadius: 10,
    fontSize: 15,
    fontWeight: "700",
  },
});
