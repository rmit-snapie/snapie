// https://www.npmjs.com/package/react-native-tts
import Tts from 'react-native-tts';
import {Platform} from 'react-native';

const defaultTTSConfig = () => {
  Tts.setDefaultLanguage('en-IE');
  if (Platform.OS === 'ios') {
    Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
  }
  //TODO find correct voice package for Android
  Tts.setDefaultRate(0.35, true);
  Tts.setDefaultPitch(1.3);
  Tts.setIgnoreSilentSwitch('ignore');
  // list all voices packages
  // Tts.voices().then(voices => console.log('voices :', voices));
  Tts.addEventListener('tts-start');
  Tts.addEventListener('tts-finish');
  Tts.addEventListener('tts-cancel');
};

defaultTTSConfig();

export const setLanguage = (languageName: string) => {
  Tts.setDefaultLanguage(languageName);
};
export const setSpeechRate = (rate: number) => {
  Tts.setDefaultRate(rate);
};

export const setSpeechPitch = (rate: number) => {
  Tts.setDefaultPitch(rate);
};

export const readText = (text: string) => {
  Tts.stop();
  Tts.speak(text);
};

// in case remove listeners is needed in the future
export const cleanup = () => {
  Tts.removeAllListeners(['tts-start', 'tts-finish', 'tts-cancel']);
  Tts.stop();
};
