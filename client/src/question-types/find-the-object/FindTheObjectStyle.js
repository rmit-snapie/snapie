import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: windowWidth,
  },
  exitWrapper: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  exit: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  questionWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  questionContent: {
    fontSize: 24,
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
    color: '#4c4c4c',
  },
  cameraWrapper: {
    flex: 4,
    height: 500,
    width: 300,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    borderColor: '#dddddd',
    borderRadius: 25,
    overflow: 'hidden',
  },
  camera: {
    height: 500,
    width: 300,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  recapture: {
    width: 50,
    height: 50,
  },
  recaptureWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    marginTop: 15,
  },
  capture: {
    height: 100,
    width: 100,
    marginTop: 15,
    resizeMode: 'contain',
  },
  analyzeWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkButton: {
    width: windowWidth - 75,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 16,
  },
  checkAnswer: {
    height: 52,
    borderTopWidth: 1,
    borderColor: '#f7ab5f',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 5,
    borderBottomColor: '#c4804e',
    backgroundColor: '#f7ab5f',
  },
  disabledCheck: {
    backgroundColor: '#cfcfcf',
  },
  check: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
    fontFamily: 'Quicksand-Bold',
  },
  disabledConfirmTitle: {
    fontSize: 18,
    color: '#777777',
    letterSpacing: 0.8,
    fontFamily: 'Quicksand-Bold',
    marginBottom: 5,
  },
});
