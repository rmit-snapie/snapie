import React from "react";
import { StyleSheet, Text, View } from "react-native";
import VoiceNative from "./components/VoiceNative";
import TextToSpeech from "./components/TextToSpeech";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <VoiceNative />
      <TextToSpeech />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
