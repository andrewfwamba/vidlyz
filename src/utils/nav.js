import "react-native-gesture-handler";
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useLogin } from "../context/loginProvider";
// import DrawerNavigator from "./DrawerNavigator";
import Loader from "../components/Loader";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import MyDrawer from "./Navigation";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Drawer"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Drawer" component={MyDrawer} />
    </Stack.Navigator>
  );
};

// const mainDrawer = () => {
//   <Drawer.Navigator>
//     <Drawer.Screen name="home" component={Home} />
//   </Drawer.Navigator>;
// };

const MainNavigator = () => {
  const { isLoggedIn, loginPending } = useLogin();
  return isLoggedIn ? (
    <>
      <MyDrawer />
      {loginPending ? <Loader /> : null}
    </>
  ) : (
    <StackNavigator />
  );
};

export default MainNavigator;
