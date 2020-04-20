import React from 'react';
import {Button} from 'react-native';
// import Voice from "react-native-voice";
import TTS from 'react-native-tts';
// https://www.npmjs.com/package/react-native-tts
const defaultTTSConfig = () => {
  TTS.getInitStatus().then(() => {
    console.log('TTS init...');
  });
  TTS.setDefaultLanguage('en-IE');
  TTS.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
  TTS.setDefaultRate(0.5, true);
  TTS.setDefaultPitch(1.3);
  TTS.setIgnoreSilentSwitch('ignore');
  // TTS.voices().then(voices => console.log('voices :', voices));
  TTS.addEventListener('tts-start', event => console.log('start', event));
  TTS.addEventListener('tts-finish', event => console.log('finish', event));
  TTS.addEventListener('tts-cancel', event => console.log('cancel', event));
  //  run below to manually config
  // this.initTts();
};

export const setLanguage = async languageName => {
  await TTS.setDefaultLanguage(languageName);
};
export const setSpeechRate = async rate => {
  await TTS.setDefaultRate(rate);
};

export const setSpeechPitch = async rate => {
  await TTS.setDefaultPitch(rate);
};
defaultTTSConfig();
export const readText = async text => {
  // TTS.stop();
  TTS.getInitStatus().then(() => {
    TTS.speak(text);
  });
};
export const cleanup = async () => {
  TTS.removeAllListeners(['tts-start', 'tts-finish', 'tts-cancel']);
  TTS.stop();
};
export const readHello = async () => {
  try {
    await TTS.getInitStatus().then(() => {
      TTS.speak('Hello world!, this is a demo text to speech, from tam');
    });
  } catch (e) {
    console.error(e);
  }
};

const initTts = async () => {
  const voices = await TTS.voices();
  const availableVoices = voices
    .filter(v => !v.networkConnectionRequired && !v.notInstalled)
    .map(v => {
      return {id: v.id, name: v.name, language: v.language};
    });
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
  } else {
    console.log('selectedVoice: ', selectedVoice);
  }
};

const onVoicePress = async voice => {
  try {
    await TTS.setDefaultLanguage(voice.language);
  } catch (err) {
    // My Samsung S9 has always this error: "Language is not supported"
    console.log(`setDefaultLanguage error `, err);
  }
  await TTS.setDefaultVoice(voice.id);
  // this.setState({selectedVoice: voice.id});
};

const renderVoiceItem = ({item}) => {
  return (
    <Button
      title={`${item.language} - ${item.name || item.id}`}
      color={this.state.selectedVoice === item.id ? undefined : '#969696'}
      onPress={() => onVoicePress(item)}
    />
  );
};
