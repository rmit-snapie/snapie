import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageAssetWrapper: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    height: 250,
    width: 175,
  },
  questionWrapper: {
    flex: 2,
    justifyContent: 'center',
  },
  question: {
    fontSize: 24,
    fontFamily: 'Amiko-Bold',
    textAlign: 'center',
  },
  pronounceButtonWrapper: {
    flex: 2,
  },
});
