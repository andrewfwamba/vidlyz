import "react-native-gesture-handler";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import MyDrawer from "./src/utils/Navigation";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import MainNavigator from "./src/utils/nav";
import LoginProvider from "./src/context/loginProvider";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // const [fontsLoaded] = useFonts({
    //   "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
    // });
    async function loadFonts() {
      await Font.loadAsync({
        "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
        "Poppins-ThinItalic": require("./assets/fonts/Poppins-ThinItalic.ttf"),
        "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
        "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-ExtraLightItalic": require("./assets/fonts/Poppins-ExtraLightItalic.ttf"),
        "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
        "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
        "Poppins-Italic": require("./assets/fonts/Poppins-Italic.ttf"),
      })
        .then((res) => {
          console.log("Fonts loaded successfully!");
          setLoaded(true);
        })
        .catch((Err) => {
          setLoaded(true);
          console.log(Err);
        });
    }

    loadFonts();
  }, []);
  return (
    <LoginProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </LoginProvider>
  );
}
