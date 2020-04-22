// https://www.npmjs.com/package/react-native-tts
import TTS from 'react-native-tts';

const defaultTTSConfig = () => {
  TTS.getInitStatus().then(() => {
    console.log('TTS init...');
  });
  TTS.setDefaultLanguage('en-IE');
  TTS.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
  TTS.setDefaultRate(0.35, true);
  TTS.setDefaultPitch(1.3);
  TTS.setIgnoreSilentSwitch('ignore');
  // TTS.voices().then(voices => console.log('voices :', voices));
  TTS.addEventListener('tts-start');
  TTS.addEventListener('tts-finish');
  TTS.addEventListener('tts-cancel');
  //  run below to manually config
  // this.initTts();
};

defaultTTSConfig();

export const setLanguage = (languageName: string) => {
  TTS.setDefaultLanguage(languageName);
};
export const setSpeechRate = (rate: number) => {
  TTS.setDefaultRate(rate);
};

export const setSpeechPitch = (rate: number) => {
  TTS.setDefaultPitch(rate);
};

export const readText = (text: string) => {
  cleanup();
  TTS.getInitStatus().then(() => {
    TTS.speak(text);
  });
};

export const cleanup = () => {
  TTS.removeAllListeners(['tts-start', 'tts-finish', 'tts-cancel']);
  TTS.stop();
};
