import React, { Component } from "react";
import { Text, View } from "react-native";
class MyHome extends Component {
  render() {
    return (
      <View>
        <Header />
        <Main />
        <Footer />
      </View>
    );
  }
}
// class Header extends Component {
//   render() {
//     return (
//       <View>
//         <Text>HEADER</Text>
//       </View>
//     );
//   }
// }
const Header = () => (
  <View>
    <Text>HEADER</Text>
  </View>
);
const Footer = () => (
  <View>
    <Text>Footer</Text>
  </View>
);
const Main = () => (
  <View>
    <Text> Main </Text>
  </View>
);
