import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo, Foundation, Feather } from "@expo/vector-icons";
import { Colors } from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Home = () => {
  let [data, setData] = useState([]);

  const fetch = async () => {
    try {
      let response = axios({
        method: "GET",
        url: "https://finalspaceapi.com/api/v0/episode",
      });
      setData(response);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    fetch();
    console.log(data);
  });
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
      <Text>Picks</Text>
      <View>
        <View style={{ height: 100, width: "80%" }}></View>
      </View>
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
