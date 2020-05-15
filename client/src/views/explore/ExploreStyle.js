import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exploreHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#efc458',
    width: windowWidth,
  },
  goHome: {
    marginLeft: 20,
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  goBack: {
    marginLeft: 20,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  cameraWrapper: {
    flex: 4,
    height: 500,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    height: 500,
    width: windowWidth,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  goToBook: {
    width: 50,
    height: 50,
    right: 20,
    bottom: 20,
    resizeMode: 'contain',
  },
  exploreFooter: {
    flex: 2,
    backgroundColor: '#efc458',
    width: windowWidth,
    position: 'relative',
  },
  captureWrapper: {
    width: windowWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitWrapper: {
    width: 80,
    height: 80,
    borderBottomRightRadius: 160,
    borderBottomWidth: 10,
    borderRightWidth: 10,
    borderColor: '#F7ab5f',
    backgroundColor: '#ffffff',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exit: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  exitAnalyze: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
  },
  loading: {
    marginTop: 20,
  },
  lookUp: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
