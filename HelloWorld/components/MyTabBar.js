import React from "react";
import { View, StyleSheet } from "react-native";
import MyTabBarItem from "./MyTabBarItem";
const MyTabBar = ({ setType, type }) => (
  <View style={styles.container}>
    <MyTabBarItem type={type} title="All" setType={() => setType("All")} />
    <MyTabBarItem
      type={type}
      border
      title="Active"
      setType={() => setType("Active")}
    />
    <MyTabBarItem
      type={type}
      border
      title="Complete"
      setType={() => setType("Complete")}
    />
  </View>
);
const styles = StyleSheet.create({
  container: {
    height: 30,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
    minWidth: 300
  }
});
export default MyTabBar;
