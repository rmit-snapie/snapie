import React from "react";
import { StyleSheet, Text, View, Button, AppRegistry } from "react-native";
import Voice from "react-native-voice";
export default class VoiceNative extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recognized: "",
      started: "",
      results: []
    };

    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
    onStop = this.onStop.bind(this);
  }
  onSpeechStart(e) {
    this.setState({
      started: "√"
    });
  }
  onSpeechRecognized(e) {
    this.setState({
      recognized: "√"
    });
  }
  onSpeechResults(e) {
    this.setState({
      results: e.value
    });
  }
  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }
  async _startRecognition(e) {
    this.setState({
      recognized: "",
      started: "",
      results: []
    });
    try {
      console.log("start recording....");
      await Voice.start("VI");
    } catch (e) {
      console.error(e);
    }
  }
  async stopRecording() {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  }
  onStop() {
    console.log("stop recording!");
    Voice.destroy().then(Voice.removeAllListeners);
  }
  render() {
    console.log("state: ", this.state);
    return (
      <View>
        <Text style={styles.title}>
          React native voice native speech to text:
        </Text>
        <Text style={styles.transcript}>Transcript</Text>
        {this.state.results.map((result, index) => (
          <Text key={index} style={styles.transcript}>
            {result}
          </Text>
        ))}
        <Button
          style={styles.transcript}
          onPress={this._startRecognition.bind(this)}
          title="Start"
        ></Button>
        <Button
          style={styles.transcript}
          onPress={this.onStop.bind(this)}
          title="Stop"
        ></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  transcript: {
    textAlign: "center",
    color: "#B0171F",
    marginBottom: 1
    // top: "400%"
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
AppRegistry.registerComponent("VoiceNative", () => VoiceNative);
