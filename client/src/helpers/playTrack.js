import TrackPlayer from 'react-native-track-player';
// https://react-native-kit.github.io/react-native-track-player/getting-started/

// you need to create a Track Structure to provide all the information for the player
var track = {
  // required info for a valid track:
  // id: 'myid', // Must be a string, required
  // url: 'http://example.com/avaritia.mp3', // Load media from the network
  // url: require('./musicfile.mp3'), // Load media from the app bundle
  // url: 'file:///storage/sdcard0/Music/avaritia.wav' // Load media from the file system
  // title: 'mytitle', //required
  // artist: 'deadmau5', //required
  // not required:
  // album: 'while(1<2)',
  // genre: 'Progressive House, Electro House',
  // date: '2014-05-20T07:00:00+00:00', // RFC 3339
  // artwork: 'http://example.com/avaritia.png', // Load artwork from the network
  // artwork: require('./avaritia.jpg'), // Load artwork from the app bundle
  // artwork: 'file:///storage/sdcard0/Downloads/artwork.png' // Load artwork from the file system
};

// Adding to the queue
// You can provide multiple items in one single call
// TrackPlayer.add([track]).then(function () {
//   // The tracks were added
// });
// Removing from the queue
// TrackPlayer.remove([trackId1, trackId2]);
// // Retrieving the queue
// let tracks = await TrackPlayer.getQueue();
// // Skipping
// TrackPlayer.skip(trackId);
// TrackPlayer.skipToNext();
// TrackPlayer.skipToPrevious();

// After a media file has been loaded, you can get information about it
// State is one of STATE_NONE, STATE_PLAYING, STATE_PAUSED, STATE_STOPPED, STATE_BUFFERING
// let state = await TrackPlayer.getState();

// let trackId = await TrackPlayer.getCurrentTrack();
// let trackObject = await TrackPlayer.getTrack(trackId);

// // Position, buffered position and duration return values in seconds
// let position = await TrackPlayer.getPosition();
// let buffered = await TrackPlayer.getBufferedPosition();
// let duration = await TrackPlayer.getDuration();

// TrackPlayer.play();
// TrackPlayer.pause();
// TrackPlayer.stop();
// TrackPlayer.reset();
// Seeks to a position in seconds. Can only be called after the player has been loaded
// TrackPlayer.seekTo(12.5);

// The volume must be a number between 0 to 1.
// TrackPlayer.setVolume(0.5);
// TrackPlayer.updateOptions({
//     // One of RATING_HEART, RATING_THUMBS_UP_DOWN, RATING_3_STARS, RATING_4_STARS, RATING_5_STARS, RATING_PERCENTAGE
//     ratingType: TrackPlayer.RATING_5_STARS,

//     // Whether the player should stop running when the app is closed on Android
//     stopWithApp: false,

//     // An array of media controls capabilities
//     // Can contain CAPABILITY_PLAY, CAPABILITY_PAUSE, CAPABILITY_STOP, CAPABILITY_SEEK_TO,
//     // CAPABILITY_SKIP_TO_NEXT, CAPABILITY_SKIP_TO_PREVIOUS, CAPABILITY_SET_RATING
//     capabilities: [
//         TrackPlayer.CAPABILITY_PLAY,
//         TrackPlayer.CAPABILITY_PAUSE,
//         TrackPlayer.CAPABILITY_STOP
//     ],

//     // An array of capabilities that will show up when the notification is in the compact form on Android
//     compactCapabilities: [
//         TrackPlayer.CAPABILITY_PLAY,
//         TrackPlayer.CAPABILITY_PAUSE
//     ]

//     // Icons for the notification on Android (if you don't like the default ones)
//     playIcon: require('./play-icon.png'),
//     pauseIcon: require('./pause-icon.png'),
//     stopIcon: require('./stop-icon.png'),
//     previousIcon: require('./previous-icon.png'),
//     nextIcon: require('./next-icon.png'),
//     icon: require('./notification-icon.png'), // The notification icon
// });

// // If the player is already initialized, the promise is resolved immediately.
// TrackPlayer.setupPlayer().then(() => {
//   // The player is ready to be used
//   TrackPlayer.add([track]).then(function () {
//     // The tracks were added
//     TrackPlayer.play();
//   });
// });

export const play = () => {
  console.log('about to play: ...');
  var myAudio = {
    id: 'audioid',
    //  this is a must for an asset style track:
    url: require('./audios/musicfile.mp3'),

    title: 'mytitle',
    artist: 'deadmau5',
  };

  // If the player is already initialized, the promise is resolved immediately.
  TrackPlayer.setupPlayer().then(() => {
    // The player is ready to be used
    TrackPlayer.add([myAudio]).then(() => {
      // The tracks were added
      TrackPlayer.play();
    });
  });
};
export const stop = () => {
  console.log('stop playing.....');
  TrackPlayer.stop();
};
export const pause = () => {
  console.log('pause playing.....');
  TrackPlayer.pause();
};
