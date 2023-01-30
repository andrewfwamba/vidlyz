import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../utils/Colors";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header section */}
      <View style={{ height: 50, backgroundColor: "#000" }}>
        <Text style={{ color: Colors.lightText }}>Vidlyz</Text>
      </View>
      {/* Label for video page */}

      <Text>Browse Videos</Text>

      <View>
        <View style={{ height: 100, width: "80%" }}></View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
    alignItems: "center",
  },
});
