import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import FormInput from "../components/FormInput";
import { Colors } from "../utils/Colors";

const Signup = () => {
  // const [userInfo, setUserInfo] = useState({
  //   fullname: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  //   confirmpassword: "",
  // });
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  // const { fullname, email, phone, password, confirmpassword } = userInfo;

  // Validate fullname

  const ValidateFullname = (fullname) => {
    if (fullname.length >= 3) {
      setFullname(fullname);
      setNameError("");
    } else {
      setFullname(fullname);
      setNameError("Enter a valid name");
    }
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

  // Validate phone
  const validatePhone = (phone) => {
    if (phone.length >= 10) {
      setPhone(phone);
      setPhoneError("");
      return true;
    } else {
      setPhone(phone);
      setPhoneError("Enter valid phone number");
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
      console.log("now running");
      return false;
    }
  };

  // Check confirm password
  const validateConfirmPassword = (confirmpassword) => {
    if (confirmpassword == password) {
      setConfirmpassword(confirmpassword);
      setConfirmError("");
      return true;
    } else {
      setConfirmpassword(confirmpassword);
      setConfirmError("Password do not match");
      return false;
    }
  };

  // Attempt to combine validation

  const validation = (password, email) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (password.length >= 8) {
      setPassword(password);
      setPasswordError("");
      return true;
    } else {
      setPassword(password);
      setPasswordError("Password must be at least 8 characters.");
      console.log("now running");
      return false;
    }

    if (reg.test(email)) {
      setEmail(email);
      setEmailError("");
      console.log("running email");
      return true;
    } else {
      setEmail(email);
      console.log("an error");

      setEmailError("Please enter a valid email address.");

      return false;
    }
  };

  const submitForm = async () => {
    if (validateEmail) {
      try {
        console.log(email);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      vertical
      showsVerticalScrollIndicator={false}
    >
      {/* Logo section */}
      <Entypo
        name="folder-video"
        size={50}
        color={Colors.iconColor}
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
          margin: 5,
          width: "90%",
        }}
      ></View>
      <View
        style={{
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
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormInput
            iconName={"account"}
            placeholder="Full name"
            value={fullname}
            onChangeText={(fullname) => ValidateFullname(fullname)}
          />
          {nameError !== "" && (
            <Text style={styles.errortext}>{nameError}</Text>
          )}
          {error ? <Text style={{ color: "red" }}>{error}</Text> : null}

          <FormInput
            placeholder="email"
            iconName={"email-outline"}
            value={email}
            onChangeText={(email) => validateEmail(email)}
            onBlur={(email) => validation(email)}
            keyboardType="email-address"
            autoCapitalize={false}
          />
          {emailError !== "" && (
            <Text style={styles.errortext}>{emailError}</Text>
          )}
          <FormInput
            placeholder="Phone number"
            iconName={"phone"}
            value={phone}
            onChangeText={(phone) =>
              validatePhone(
                phone.replace(/[- #*;,N.<>\{\}\[\]\\\/]/gi, ""),
                phone
              )
            }
            keyboardType="phone-pad"
          />
          {phoneError !== "" && (
            <Text style={styles.errortext}>{phoneError}</Text>
          )}

          <FormInput
            placeholder="Password"
            iconName={"lock"}
            value={password}
            onChangeText={(password) => validatePassword(password)}
            keyboardType="alphanumeric"
            secureTextEntry
          />
          {passwordError !== "" && (
            <Text style={styles.errortext}>{passwordError}</Text>
          )}

          <FormInput
            placeholder="Confirm password"
            iconName={"lock"}
            value={confirmpassword}
            onChangeText={(confirmpassword) =>
              validateConfirmPassword(confirmpassword)
            }
            keyboardType="alphanumeric"
            secureTextEntry
          />

          {confirmError !== "" && (
            <Text style={styles.errortext}>{confirmError}</Text>
          )}

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
            onPress={submitForm}
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
        </KeyboardAvoidingView>

        <TouchableOpacity
          activeOpacity={0.6}
          style={{ width: "100%", height: 30 }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ alignSelf: "center" }}>
            Already Have an account?{" "}
            <Text style={{ color: "red" }}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Signup;

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
