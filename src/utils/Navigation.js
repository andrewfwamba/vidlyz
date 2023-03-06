import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useLogin } from "../context/loginProvider";
import Home from "../screens/Home";

const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
  const { setIsLoggedIn, profile, setLoginPending } = useLogin();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
            backgroundColor: "#f6f6f6",
            marginBottom: 20,
          }}
        >
          <View>
            <Text style={{ fontFamily: "Poppins-SemiBold", marginLeft: 3 }}>
              Andrew
            </Text>
            <Text style={{ fontFamily: "Poppins-Light", marginLeft: 3 }}>
              andrew@gmail.com
            </Text>
          </View>
          <Image
            // source={{ uri: profile?.avatar }}
            source={{
              uri: "https://res.cloudinary.com/doxety4ay/image/upload/v1668266964/636fbb822025a7b8599dbc58_profile.jpg",
            }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: "#fff",
            }}
          />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 0,
          left: 0,
          bottom: 50,
          backgroundColor: "#f6f6f6",
          padding: 20,
        }}
        onPress={async () => {
          setLoginPending(true);

          const isLoggedOut = await signOut();
          if (isLoggedOut) {
            setIsLoggedIn(false);
          }
          setLoginPending(false);
        }}
      >
        <Text style={{ fontFamily: "Poppins-Regular", marginLeft: 3 }}>
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "transparent",
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitle: "",
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen component={Home} name="Home" />
    </Drawer.Navigator>
  );
}
