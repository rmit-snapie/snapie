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
    flex: 5,
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
    marginBottom: 40,
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
    borderColor: '#e5e5e5',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 6,
    shadowColor: 'rgba(120,114,120,0.64)', // IOS
    backgroundColor: '#afafaf',
  },
  answerTitle: {
    fontSize: 24,
    color: 'rgb(28, 176, 246)',
  },
  chosenAnswerTitle: {
    fontSize: 24,
    color: '#3c3c3c',
  },
  assetWrapper: {
    marginBottom: 25,
  },
  asset: {
    width: 75,
    height: 75,
  },
  column2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  child3: {
    flex: 1,
  },
});
