import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  cheersWrapper: {flex: 1, width: windowWidth, alignItems: 'center'},
  container: {
    flex: 9,
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
    // position: 'absolute',
    // bottom: 45,
    flex: 1,
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
    width: windowWidth - 75,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 16,
  },
  continueTitle: {
    fontSize: 18,
    color: '#ffffff',
    letterSpacing: 1,
    fontFamily: 'Quicksand-Bold',
  },
});
