import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  preview: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
