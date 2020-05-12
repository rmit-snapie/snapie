import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exploreHeader: {
    flex: 1,
  },
  cameraWrapper: {
    flex: 4,
  },
  captureWrapper: {
    bottom: 30,
  },
  lookUp: {
    resizeMode: 'contain',
  },
  result: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
  },

});
