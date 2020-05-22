import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  gifWrapper: {
    flex: 4,
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 400,
    zIndex: 2,
  },
  correctAnswerWrapper: {
    flex: 3,
    justifyContent: 'flex-start',
    width: 300,
  },
  correctAnswer: {
    lineHeight: 40,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Quicksand-Bold',
    color: '#4c4c4c',
  },
  continueButtonWrapper: {
    position: 'absolute',
    bottom: 65,
  },
  continueButton: {
    borderTopWidth: 1,
    borderColor: '#f7ab5f',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 5,
    borderBottomColor: '#c4804e',
    backgroundColor: '#f7ab5f',

    paddingTop: 13,
    paddingBottom: 13,
    paddingRight: 16,
    paddingLeft: 16,
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 16,
    backgroundColor: '#f7ab5f',
  },
  continueTitle: {
    fontSize: 18,
    color: '#ffffff',
    letterSpacing: 1,
    fontFamily: 'Quicksand-Bold',
    marginBottom: 3
  },
});
