import React, { Component } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class TestExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: undefined
    };
  }
  render() {
    if (this.state.greeting) return this.renderAfterButton();
    return (
      <View
        testID="welcome"
        style={{
          flex: 1,
          paddingTop: 20,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ fontSize: 25, marginBottom: 30 }}>Welcome</Text>
        <TouchableOpacity
          testID="hello_button"
          onPress={this.onButtonPress.bind(this, "Hello")}
        >
          <Text style={{ color: "blue", marginBottom: 20 }}>Say Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID="world_button"
          onPress={this.onButtonPress.bind(this, "World")}
        >
          <Text style={{ color: "blue", marginBottom: 20 }}>Say World</Text>
        </TouchableOpacity>
      </View>
    );
  }
  renderAfterButton() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 20,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ fontSize: 25 }}>{this.state.greeting}!!!</Text>
      </View>
    );
  }
  onButtonPress(greeting) {
    this.setState({
      greeting: greeting
    });
  }
}