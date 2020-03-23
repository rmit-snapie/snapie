import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  AppRegistry,
  Slider,
  Keyboard
} from "react-native";
// import Voice from "react-native-voice";
import TTS from "react-native-tts";
import { TextInput, FlatList } from "react-native-gesture-handler";
// https://www.npmjs.com/package/react-native-tts
export default class TextToSpeech extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recognized: "",
      started: "",
      results: [],
      voices: [],
      ttsStatus: "initiliazing",
      selectedVoice: null,
      speechRate: 0.5,
      speechPitch: 1,
      text: "this is a demo, read it please"
    };

    // Voice.onSpeechStart = this.onSpeechStart.bind(this);
    // Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    // Voice.onSpeechResults = this.onSpeechResults.bind(this);

    // initTts = this.initTts.bind(this);
  }

  componentWillUnmount() {
    // Voice.destroy().then(Voice.removeAllListeners);
    TTS.removeAllListeners(["tts-start", "tts-finish", "tts-cancel"]);
  }
  async readHello() {
    try {
      await TTS.getInitStatus().then(() => {
        TTS.speak("Hello world!, this is a demo text to speech, from tam");
      });
    } catch (e) {
      console.error(e);
    }
  }

  initTts = async () => {
    const voices = await TTS.voices();
    // const availableVoices = voices
    //   .filter(v => !v.networkConnectionRequired && !v.notInstalled)
    //   .map(v => {
    //     return { id: v.id, name: v.name, language: v.language };
    //   });
    let selectedVoice = null;
    if (voices && voices.length > 0) {
      selectedVoice = voices[9].id;
      try {
        await TTS.setDefaultLanguage(voices[9].language);
      } catch (err) {
        // My Samsung S9 has always this error: "Language is not supported"
        console.log(`setDefaultLanguage error `, err);
      }
      await TTS.setDefaultVoice(voices[9].id);
      this.setState({
        voices: availableVoices,
        selectedVoice,
        ttsStatus: "initialized"
      });
    } else {
      this.setState({ ttsStatus: "initialized" });
    }
  };

  readText = async () => {
    TTS.stop();
    TTS.speak(this.state.text);
  };

  setSpeechRate = async rate => {
    await TTS.setDefaultRate(rate);
    this.setState({ speechRate: rate });
  };

  setSpeechPitch = async rate => {
    await TTS.setDefaultPitch(rate);
    this.setState({ speechPitch: rate });
  };

  onVoicePress = async voice => {
    try {
      await TTS.setDefaultLanguage(voice.language);
    } catch (err) {
      // My Samsung S9 has always this error: "Language is not supported"
      console.log(`setDefaultLanguage error `, err);
    }
    await TTS.setDefaultVoice(voice.id);
    this.setState({ selectedVoice: voice.id });
  };

  renderVoiceItem = ({ item }) => {
    return (
      <Button
        title={`${item.language} - ${item.name || item.id}`}
        color={this.state.selectedVoice === item.id ? undefined : "#969696"}
        onPress={() => this.onVoicePress(item)}
      />
    );
  };

  componentDidMount() {
    TTS.getInitStatus().then(() => {
      this.setState({ ttsStatus: "initialized" });
    });
    TTS.setDefaultLanguage("en-IE");
    TTS.setDefaultVoice("com.apple.ttsbundle.Moira-compact");
    TTS.setDefaultRate(0.5, true);
    TTS.setDefaultPitch(1.3);
    TTS.setIgnoreSilentSwitch("ignore");
    TTS.voices().then(voices => console.log("voices :", voices));
    TTS.addEventListener("tts-start", event => console.log("start", event));
    TTS.addEventListener("tts-finish", event => console.log("finish", event));
    TTS.addEventListener("tts-cancel", event => console.log("cancel", event));
    //  run below to manually config
    // this.initTts();
  }
  render() {
    // console.log("state: ", this.state);

    return (
      <View>
        <Text style={styles.title}>{`React Native TTS Example :`}</Text>
        <Button
          style={styles.transcript}
          onPress={() => {
            this.readHello();
          }}
          title="speak hello"
        ></Button>

        <Button title={`Read text`} onPress={this.readText} />

        <Text style={styles.label}>{`Status: ${this.state.ttsStatus ||
          ""}`}</Text>

        <Text style={styles.label}>{`Selected Voice: ${this.state
          .selectedVoice || ""}`}</Text>

        <View style={styles.sliderContainer}>
          <Text
            style={styles.sliderLabel}
          >{`Speed: ${this.state.speechRate.toFixed(2)}`}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0.01}
            maximumValue={0.99}
            value={this.state.speechRate}
            onSlidingComplete={this.setSpeechRate}
          />
        </View>

        <View style={styles.sliderContainer}>
          <Text
            style={styles.sliderLabel}
          >{`Pitch: ${this.state.speechPitch.toFixed(2)}`}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0.5}
            maximumValue={2}
            value={this.state.speechPitch}
            onSlidingComplete={this.setSpeechPitch}
          />
        </View>

        <TextInput
          style={styles.textInput}
          multiline={true}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          onSubmitEditing={Keyboard.dismiss}
        />

        {/* <FlatList
          style={styles.list}
          keyExtractor={item => item.id}
          renderItem={this.renderVoiceItem}
          extraData={this.state.selectedVoice}
          data={this.state.voices}
        /> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  transcript: {
    textAlign: "center",
    color: "#B0171F",
    marginBottom: 1,
    top: "400%"
  },
  container: {
    marginTop: 26,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  label: {
    textAlign: "center"
  },
  sliderContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  sliderLabel: {
    textAlign: "center",
    marginRight: 20
  },
  slider: {
    width: 150
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    // flex: 1,
    width: "100%"
  },
  list: {
    borderColor: "gray",
    borderWidth: 1,
    // flex: 1,
    width: "100%",
    height: "10%"
  }
});
AppRegistry.registerComponent("TextToSpeech", () => TextToSpeech);
