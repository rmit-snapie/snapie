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
  TrackPlayer.reset()
    .then(() => {
      TrackPlayer.add([happyTrack]).then(() => {
        TrackPlayer.play();
      });
    })

    .catch(e => TrackPlayer.stop());
};

export const playSad = () => {
  TrackPlayer.reset()
    .then(() => {
      TrackPlayer.add([sadTrack]).then(() => {
        TrackPlayer.play();
      });
    })

    .catch(e => TrackPlayer.stop());
};

// export const stopAudio = async () => {
//   return await TrackPlayer.reset();
// };
