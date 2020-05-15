import TrackPlayer from 'react-native-track-player';

const sadTrack = {
  id: 'sadTrack',
  url: require('./audios/sad.mov'),
  artist: 'unknown',
  title: 'Sad Track',
};

const happyTrack = {
  id: 'happyTrack',
  url: require('./audios/yay.mov'),
  title: 'Happy Track',
  artist: 'unknown',
};

export const playCheers = () => {
  TrackPlayer.add([happyTrack]).then(() => {
    return TrackPlayer.play();
  });
};

export const playSad = () => {
  TrackPlayer.add([sadTrack]).then(() => {
    return TrackPlayer.play();
  });
};

export const stopAudio = () => {
  return TrackPlayer.stop();
};
