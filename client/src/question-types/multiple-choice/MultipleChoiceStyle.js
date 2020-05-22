import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
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
  assetsWrapper: {
    flex: 4,
    padding: 50,
    justifyContent: 'center',
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    borderColor: '#dddddd',
    padding: 20,
    borderRadius: 25,
    backgroundColor: '#ffffff',
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  questionWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  multipleChoiceImageQuestionWrapper: {
    flex: 1,
    marginTop: 100,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  questionContent: {
    fontSize: 24,
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
    color: '#4c4c4c',

  },
  answersWrapper: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginRight: 30,
    marginLeft: 30,
  },
  imageAnswersWrapper: {
    flex: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    justifyContent: 'center',
    paddingTop: 50,
  },
  answer: {
//    shadowOffset: {
//      width: 0,
//      height: 2,
//    },
//    shadowRadius: 2.62,
//    elevation: 4,
    backgroundColor: '#fff',
    padding: 5,
    marginBottom: 10,
    height: 80,
    width: windowWidth / 2.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,

  },
  notChosenAnswer: {
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    borderColor: '#dddddd',
//    shadowColor: 'rgba(120,114,120,0.64)',
  },
  chosenAnswer: {
    borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 4,
        borderColor: '#efc458',
  },
  answerTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Quicksand-Medium',
    marginBottom: 5,
    color: '#4c4c4c',
  },
  answerImage: {
    width: windowWidth / 2.5,
    height: windowWidth / 2.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 20,
  },
  notChosenAnswerImage: {
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 6,
    borderColor: '#dddddd',
//    shadowColor: 'rgba(120,114,120,0.64)',
    backgroundColor: '#ffffff',
  },
  chosenAnswerImage: {
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 6,
    borderColor: '#efc458',
    backgroundColor: '#ffffff',
  },
  imageContent: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  chosenAnswerTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Quicksand-Medium',
    marginBottom: 7,
    color: '#efc458'


  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 45,
  },
  confirmButton: {
//    borderBottomWidth: 4,
//    shadowOffset: {
//      width: 0,
//      height: 2,
//    },
//    shadowOpacity: 0.23,
//    shadowRadius: 2.62,
//    elevation: 4,
//    paddingTop: 13,
//    paddingBottom: 13,
//    paddingRight: 16,
//    paddingLeft: 16,

    width: windowWidth - 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 16,
  },
  confirmAnswer: {
  height: 52,
//    borderBottomColor: 'rgba(120,114,120,0.64)',
    borderTopWidth: 1,
    borderColor: '#f7ab5f',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 5,
        borderBottomColor: '#c4804e',
    backgroundColor: '#f7ab5f',

  },
  disabledConfirm: {

//    borderBottomColor: 'rgba(120,114,120,0.64)',
    backgroundColor: '#cfcfcf',

  },
  confirmTitle: {
    fontSize: 18,
    color: '#ffffff',
    letterSpacing: 0.8,
    fontFamily: 'Quicksand-Bold',
    marginBottom: 3

  },
  disabledConfirmTitle: {
    fontSize: 18,
    color: '#777777',
    letterSpacing: 0.8,
    fontFamily: 'Quicksand-Bold',
    marginBottom: 5
  }
});
