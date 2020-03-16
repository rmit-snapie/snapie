import React from "react";
import { View, Text, StyleSheet } from "react-native";
class HelloWorld extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React Native in Action"
    };
  }
  componentDidMount() {
    console.log("mounted..");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.name}</Text>{" "}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1
  }
});
