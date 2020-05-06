import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
