import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  assetsWrapper: {
    flex: 4,
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
    alignItems: 'center',
  },
  questionContent: {
    fontSize: 24,
    fontFamily: 'Amiko-Bold',
  },
  answersWrapper: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  buttonWrapper: {
    flex: 2,
  },
  answer: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: '#fff',
    padding: 5,
    marginBottom: 20,
    height: 50,
    width: 175,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 16,
  },
  notChosenAnswer: {
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 6,
    borderColor: 'rgb(229, 229, 229)',
    shadowColor: 'rgba(120,114,120,0.64)',
  },
  chosenAnswer: {
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#1cb0f6',
  },
  answerTitle: {
    fontSize: 24,
    color: 'rgb(28, 176, 246)',
    fontWeight: '600',
  },
  chosenAnswerTitle: {
    fontSize: 24,
    color: 'rgb(28, 176, 246)',
    fontWeight: '600',
  },
  confirmButton: {
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
  },
  confirmAnswer: {
    borderBottomColor: '#58a700',
    backgroundColor: '#78c800',
  },
  disabledConfirm: {
    borderBottomColor: 'rgba(120,114,120,0.64)',
    backgroundColor: '#afafaf',
  },
  confirmTitle: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
