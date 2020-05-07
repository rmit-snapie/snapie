import TrackPlayer from 'react-native-track-player';

export const playYay = () => {
  console.log('about to play: ...');
  const myAudio = {
    id: 'audioid',
    //  this is a must for an asset style track:
    url: require('./yay.mp3'),

    title: 'mytitle',
    artist: 'deadmau5',
  };

  // If the player is already initialized, the promise is resolved immediately.
  TrackPlayer.setupPlayer().then(() => {
    // The player is ready to be used
    TrackPlayer.add([myAudio]).then(() => {
      // The tracks were added
      return TrackPlayer.play();
    });
  });
};
