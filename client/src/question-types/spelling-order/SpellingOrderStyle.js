import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#ffffff'
  },
  exitWrapper: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  exit: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
  },
  mediaWrapper: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
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
      borderRadius: 25,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  questionWrapper: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  questionContent: {
    fontSize: 24,
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
    color: '#4c4c4c',
  },
  blanksWrapper: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  blanks: {
    fontSize: 28,
    fontFamily: 'Quicksand-Bold',
    color: '#4c4c4c'
  },
  clear: {
    width:40,
    height: 40,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#dddddd',
    backgroundColor: '#fff',
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 35,
    color: '#4c4c4c'
  },
  clearTitle: {
    color: '#efc458',
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 4

  },
  answersWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  answer: {
    marginTop: 20,
    borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 4,
        borderColor: '#dddddd',
    backgroundColor: '#fff',
    padding: 10,
    width: 55,
    height: 55,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 15,
    marginRight: 12,
    borderColor: 'rgb(229, 229, 229)',
  },
  answerTitle: {
     fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Quicksand-Bold',
        marginBottom: 5,
        color: '#4c4c4c',
  },
  confirmButtonWrapper: {
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
