import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
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
    marginTop: 40,
    padding: 10,
  },
  questionContent: {
    fontSize: 24,
    fontFamily: 'Quicksand-Bold',
    color: '#4c4c4c',
  },
  answersWrapper: {
    flex: 6,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
  },
  column1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  answer: {
    backgroundColor: '#ffffff',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
  },
  notChosenAnswer: {
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    borderColor: '#dddddd',
  },
  chosenAnswer: {
    borderColor: '#efc458',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
  },
  answerTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Quicksand-Medium',
    marginBottom: 5,
    color: '#4c4c4c',
  },
  chosenAnswerTitle: {
    fontSize: 18,
    color: '#efc458',
    fontWeight: '600',
    fontFamily: 'Quicksand-Medium',
    marginBottom: 5,
  },
  answerImage: {
    width: 150,
    height: 135,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginRight: 10,
    borderRadius: 20,
  },
  chosenAnswerImage: {
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 6,
    backgroundColor: '#ffffff',
    borderColor: '#efc458',
  },
  notChosenAnswerImage: {
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 6,
    borderColor: '#dddddd',
    backgroundColor: '#ffffff',
  },
  asset: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  column2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
