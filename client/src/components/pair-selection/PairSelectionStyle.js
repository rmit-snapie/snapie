import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  questionContent: {
    fontFamily: 'Amiko-Bold',
    fontSize: 32,
  },
  answersWrapper: {
    flex: 4,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  column1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  answer: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 70,
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
    shadowColor: 'rgba(120,114,120,0.64)', // IOS
  },
  chosenAnswer: {
    borderColor: '#1cb0f6',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
  },
  answerTitle: {
    fontSize: 24,
    color: 'rgb(28, 176, 246)',
    fontWeight: '600',
  },
  chosenAnswerTitle: {
    fontSize: 24,
    color: '#3c3c3c',
  },
  answerImage: {
    width: 150,
    height: 135,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 15,
    marginRight: 10,
    borderRadius: 16,
  },
  chosenAnswerImage: {
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderColor: 'rgb(28, 176, 246)',
  },
  notChosenAnswerImage: {
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 6,
    borderColor: 'rgb(229, 229, 229)',
    shadowColor: 'rgba(120,114,120,0.64)',
    backgroundColor: '#ffffff',
  },
  asset: {
    height: 100,
    width: 75,
  },
  column2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
