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
import Colors from "../utils/Colors";
import FormInput from "../components/FormInput";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
          <FormInput
            placeholder="Full name"
            label="fullname"
            value={fullname}
            onChangeText={(value) => setFullname(value)}
          />

          <FormInput
            placeholder="email"
            label="Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
            keyboardType="email-address"
          />
          <FormInput
            placeholder="Phone number"
            label="Email"
            value={phone}
            onChangeText={(value) => setPhone(value)}
            keyboardType="numeric"
          />

          <FormInput
            placeholder="Password"
            label="Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            keyboardType="alphanumeric"
            secureTextEntry
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
