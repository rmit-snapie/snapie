import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gifWrapper: {
    flex: 4,
    justifyContent: 'flex-end',
  },
  image: {
    width: 400,
    height: 400,
    zIndex: 2,
  },
  correctAnswerWrapper: {
    flex: 2,
    justifyContent: 'flex-start',
    width: 300,
  },
  correctAnswer: {
    lineHeight: 40,
    textAlign: 'center',
    fontFamily: 'Amiko-Bold',
    fontSize: 24,
  },
  continueButtonWrapper: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  continueButton: {
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
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 16,
    borderColor: 'rgb(229, 229, 229)',
    shadowColor: 'rgba(120,114,120,0.64)', // IOS
    backgroundColor: '#f7ab5f',
    borderBottomColor: 'rgba(120,114,120,0.64)',
  },
  continueTitle: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
