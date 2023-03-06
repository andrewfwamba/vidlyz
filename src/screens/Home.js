import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  RefreshControl,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Entypo, Foundation, Feather } from "@expo/vector-icons";
import { Colors } from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Home = () => {
  let [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header section */}
      <View
        style={{
          paddingHorizontal: 15,
          width: "100%",
          height: 50,
          backgroundColor: "coral",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => navigation.toggleDrawer()}
          style={{ height: 40, width: 60 }}
        >
          <Foundation name="align-left" size={24} color="black" />
        </TouchableWithoutFeedback>

        <View style={{ flexDirection: "row" }}>
          <Entypo name="folder-video" size={24} color={"red"} />
          <Text style={{ margin: 7 }}>Vidlyz</Text>
        </View>
        <View>
          <TouchableWithoutFeedback>
            <Feather name="more-horizontal" size={24} color="black" />
          </TouchableWithoutFeedback>
        </View>
      </View>
      {/* Label for video page */}
      <Text style={{ fontFamily: "Poppins-Black" }}>Picks</Text>

      {/* Returned video data */}
      {/*
       */}
      <ScrollView
        contentContainerStyle={{
          width: width,
          height: height,
          alignItems: "center",
          paddingHorizontal: 5,
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View
          style={{
            borderWidth: 0.5,
            marginTop: 10,
            borderColor: "green",
            backgroundColor: "white",
            height: 130,
            width: "95%",
            borderRadius: 5,
            elevation: 5,
            padding: 5,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <View style={{ flexDirection: "row", overflow: "scroll" }}>
            <View
              style={{ width: "40%", marginRight: 10, position: "relative" }}
            >
              <Icon
                name={"play-outline"}
                style={{
                  fontSize: 70,
                  color: Colors.playbutton,
                  position: "absolute",
                  top: 10,
                  alignSelf: "center",
                  zIndex: 1,
                }}
              />
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80",
                }}
                style={{
                  height: 100,
                  width: "100%",
                  marginRight: 10,
                  borderRadius: 5,
                }}
              />
              <Text style={{ fontSize: 15, fontFamily: "Poppins-Italic" }}>
                Video Title
              </Text>
            </View>
            <View
              style={{
                width: 0,
                flex: 1,
                marginLeft: 0,
                overflow: "hidden",
                display: "flex",
                padding: 2,
                flexGrow: 1,
              }}
            >
              <Text
                style={{
                  color: Colors.darkText,
                  fontFamily: "Poppins-SemiBold",
                }}
              >
                Video description
              </Text>
              <Text style={{ fontFamily: "Poppins-Light", fontSize: 15 }}>
                To access a MySQL database with Node.js, you need a MySQL
                driver.This tutorial will use the "mysql" module, d
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 10,
                }}
              >
                Trav Media
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ marginRight: 18, fontFamily: "Poppins-Regular" }}
                >
                  20.3K Views
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Icon
                    name={"star-four-points"}
                    style={{
                      color: "grey",
                      fontSize: 10,
                      marginTop: 4,
                    }}
                  />
                  <Text style={{ fontFamily: "Poppins-ExtraLightItalic" }}>
                    10hours
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* Static to be removed  */}

        <View
          style={{
            borderWidth: 0.5,
            marginTop: 10,
            borderColor: "green",
            backgroundColor: "white",
            height: 130,
            width: "95%",
            borderRadius: 5,
            elevation: 5,
            padding: 5,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <View style={{ flexDirection: "row", overflow: "scroll" }}>
            <View
              style={{ width: "40%", marginRight: 10, position: "relative" }}
            >
              <Icon
                name={"play-outline"}
                style={{
                  fontSize: 70,
                  color: Colors.playbutton,
                  position: "absolute",
                  top: 10,
                  alignSelf: "center",
                  zIndex: 1,
                }}
              />
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1497015289639-54688650d173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
                }}
                style={{
                  height: 100,
                  width: "100%",
                  marginRight: 10,
                  borderRadius: 5,
                }}
              />
              <Text style={{ fontSize: 15, fontFamily: "Poppins-Italic" }}>
                Filming
              </Text>
            </View>
            <View
              style={{
                width: 0,
                flex: 1,
                marginLeft: 0,
                overflow: "hidden",
                display: "flex",
                padding: 2,
                flexGrow: 1,
              }}
            >
              <Text
                style={{
                  color: Colors.darkText,
                  fontFamily: "Poppins-SemiBold",
                }}
              >
                Video description
              </Text>
              <Text style={{ fontFamily: "Poppins-Light", fontSize: 15 }}>
                To access a MySQL database with Node.js, you need a MySQL
                driver.This tutorial will use the "mysql" module, d
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 10,
                }}
              >
                Thee boss
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ marginRight: 18, fontFamily: "Poppins-Regular" }}
                >
                  3.7K Views
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Icon
                    name={"star-four-points"}
                    style={{
                      color: "grey",
                      fontSize: 10,
                      marginTop: 4,
                    }}
                  />
                  <Text style={{ fontFamily: "Poppins-ExtraLightItalic" }}>
                    Yesterday
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: Colors.mainbg,
    alignItems: "center",
  },
});
