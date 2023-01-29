import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, SsetPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const signup = () => {
    if (!email || !name || !phone || !password) {
      Alert.alert("Empty fields", "Please fill all fields");
    }
  };
  return (
    <View style={styles.container}>
      {/* Logo section */}
      <Entypo
        name="folder-video"
        size={50}
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
          height: 530,
          width: "90%",
          backgroundColor: "rgba(0,0,0,0.2)",
          borderRadius: 5,
        }}
      >
        <View style={{ marginLeft: 20 }}>
          <Text
            style={{
              alignSelf: "flex-start",
              fontSize: 30,
              fontWeight: "bold",
              color: "#0E0849",
            }}
          ></Text>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "#0E0849",
              marginBottom: 10,
            }}
          >
            Welcome, Signup to vidlyz
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
          }}
        >
          <TextInput
            placeholder="Name"
            keyboardType="alphanumeric"
            style={{
              height: 45,
              width: "85%",
              backgroundColor: "rgba(122, 111, 228, 0.2)",
              padding: 5,
              borderRadius: 10,
              fontSize: 20,
              fontWeight: "700",
              marginBottom: 20,
              borderWidth: 0.6,
            }}
          />

          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            style={{
              height: 45,
              width: "85%",
              backgroundColor: "rgba(122, 111, 228, 0.2)",
              padding: 5,
              borderRadius: 10,
              fontSize: 20,
              fontWeight: "700",
              marginBottom: 20,
              borderWidth: 0.6,
            }}
          />

          <TextInput
            placeholder="Phone Number"
            keyboardType="numeric"
            style={{
              height: 45,
              width: "85%",
              backgroundColor: "rgba(122, 111, 228, 0.2)",
              padding: 5,
              borderRadius: 10,
              fontSize: 20,
              fontWeight: "700",
              marginBottom: 20,
              borderWidth: 0.6,
            }}
          />

          <TextInput
            placeholder="Password"
            keyboardType="alphanumeric"
            secureTextEntry
            style={{
              height: 45,
              width: "85%",
              backgroundColor: "rgba(122, 111, 228, 0.2)",
              padding: 5,
              borderRadius: 10,
              fontSize: 20,
              fontWeight: "700",
              borderWidth: 0.6,
            }}
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
            onPress={signup}
          >
            <Text
              style={{
                color: "#f4f4f7",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{ width: "100%", height: 30 }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ alignSelf: "center" }}>
            Already Have an account?{" "}
            <Text style={{ color: "red" }}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
    alignItems: "center",
  },
});
