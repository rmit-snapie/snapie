import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediaWrapper: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    height: 250,
    width: 175,
  },
  questionWrapper: {
    flex: 2,
    justifyContent: 'flex-end',
  },
  questionContent: {
    fontSize: 32,
    fontFamily: 'Amiko-bold',
    marginBottom: 20,
  },
  answersWrapper: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  answer: {
    marginTop: 20,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 16,
    marginRight: 12,
  },
  notChosenAnswer: {
    borderColor: 'rgb(229, 229, 229)',
    shadowColor: 'rgba(120,114,120,0.64)', // IOS
  },
  chosenAnswer: {
    borderColor: '#afafaf',
    backgroundColor: '#afafaf',
  },
  answerTitle: {
    fontSize: 16,
  },
  confirmButtonWrapper: {
    flex: 2,
  },
  confirmButton: {
    marginTop: 15,
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
    borderColor: 'rgb(229, 229, 229)',
    shadowColor: 'rgba(120,114,120,0.64)', // IOS
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
