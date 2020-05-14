import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const TrackPlayer = require('react-native-track-player');

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() =>
  require('./src/helpers/AudioService.js'),
);
