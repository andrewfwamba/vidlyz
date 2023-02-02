import { StatusBar } from "expo-status-bar";

import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import FormInput from "../components/FormInput";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { email, password } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const signin = () => {
    if (!fullname || !password) {
      Alert.alert("Empty fields", "Please input the required fields");
      return;
    }
    if (fullname.length < 3) {
      Alert.alert("Error", "Name too short");
      return;
    }
    if (password.length < 8) {
      Alert.alert("Error", "Password should be atleast 8 characters");
      return;
    }
    Alert.alert("Success", "");
    console.log(`${fullname} and ${password}`);
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
          backgroundColor: "rgba(0,0,0,0.2)",
          borderRadius: 5,
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
            placeholder="Full name"
            value={email}
            onChangeText={(value) => handleOnChangeText(value, email)}
          />

          <FormInput
            placeholder="Password"
            value={password}
            onChangeText={(value) => handleOnChangeText(value, password)}
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={{
              margin: 20,
              backgroundColor: "#001",
              width: "80%",
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              elevation: 5,
            }}
            activeOpacity={0.7}
            onPress={signin}
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
});
