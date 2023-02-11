import { StatusBar } from "expo-status-bar";

import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import FormInput from "../components/FormInput";
import { Colors } from "../utils/Colors";

const Login = () => {
  // const [userInfo, setUserInfo] = useState({
  //   email: "",
  //   password: "",
  // });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // const { email, password } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };
  // Validate email
  const validateEmail = (email) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email)) {
      setEmail(email);
      setEmailError("");
      return true;
    } else {
      setEmail(email);
      console.log("an error");

      setEmailError("Please enter a valid email address.");

      return false;
    }
  };

  // Validate password
  const validatePassword = (password) => {
    if (password.length >= 8) {
      setPassword(password);
      setPasswordError("");
      return true;
    } else {
      setPassword(password);
      setPasswordError("Password must be at least 8 characters.");
      return false;
    }
  };

  const validate = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email) & (password.length >= 8);
  };
  let btcolor;
  if (validate()) {
    btcolor = Colors.activebtn;
  } else {
    btcolor = Colors.disabledbtn;
  }

  const onSubmit = () => {
    console.log(`${email} and ${password}`);
  };

  return (
    <View style={styles.container}>
      {/* Logo section */}
      <Entypo
        name="folder-video"
        size={45}
        color="#AE1E15"
        style={{ marginTop: 60, marginBottom: 0 }}
      />
      <Text
        style={{
          alignSelf: "center",
          marginBottom: 40,
          fontSize: 20,
          fontWeight: "600",
        }}
      >
        Vidlyz
      </Text>
      <View
        style={{
          alignSelf: "center",
          margin: 10,
          width: "90%",
        }}
      ></View>
      <View
        style={{
          height: 500,
          width: "90%",
          backgroundColor: Colors.transparentbg,
          borderRadius: 10,
        }}
      >
        <View style={{ margin: 20 }}>
          <Text
            style={{
              alignSelf: "flex-start",
              fontSize: 30,
              fontWeight: "bold",
              color: "#0E0849",
            }}
          >
            Hi,
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "#0E0849",
              marginBottom: 0,
            }}
          >
            Welcome Back,
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "#0E0849",
              alignSelf: "center",
            }}
          ></Text>
        </View>

        {/* Login form input */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <FormInput
            placeholder="Email"
            iconName={"email-outline"}
            value={email}
            onChangeText={(value) => validateEmail(value)}
            keyboardType="email-address"
          />

          {emailError !== "" && (
            <Text style={styles.errortext}>{emailError}</Text>
          )}

          {error !== "" && <Text style={{ color: "red" }}>{error}</Text>}

          <FormInput
            placeholder="Password"
            iconName={"lock"}
            value={password}
            onChangeText={(value) => validatePassword(value)}
            secureTextEntry={true}
          />
          {passwordError !== "" && (
            <Text style={styles.errortext}>{passwordError}</Text>
          )}

          <TouchableOpacity
            style={{
              margin: 20,
              backgroundColor: btcolor,
              width: "80%",
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
            activeOpacity={0.7}
            onPress={onSubmit}
            disabled={!validate()}
          >
            <Text
              style={{
                color: "#f4f4f7",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginLeft: "50%", marginBottom: 50 }}>
            <Text style={{ color: "red" }}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{ width: "100%", height: 30 }}>
          <Text style={{ alignSelf: "center" }}>
            Don't Have an account? <Text style={{ color: "red" }}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
    alignItems: "center",
  },
  errortext: {
    color: "red",
    fontSize: 10,
  },
});
