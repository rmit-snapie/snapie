import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionContent: {
    fontFamily: 'Amiko-Bold',
    fontSize: 28,
  },
  cameraWrapper: {
    flex: 4,
    height: 500,
    width: 300,
    borderWidth: 6,
    borderColor: '#cfcfcf',
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
    width: 300,
    borderBottomWidth: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    paddingTop: 13,
    paddingBottom: 13,
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 16,
  },
  checkAnswer: {
    borderBottomColor: 'rgba(120,114,120,0.64)',
    backgroundColor: '#F7ab5f',
  },
  disabledCheck: {
    borderBottomColor: 'rgba(120,114,120,0.64)',
    backgroundColor: '#afafaf',
  },
  check: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
  },
});
