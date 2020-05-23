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
        height: 30,
        width: 30,
        resizeMode: 'contain',
      },
  imageAssetWrapper: {
    flex: 3,
    justifyContent: 'flex-end',
    marginTop: 100,
    alignItems: 'center',
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',

    padding: 20,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 4,
        borderColor: '#dddddd',
        borderRadius: 25,
        backgroundColor: '#ffffff',
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  questionWrapper: {
    flex: 2,
    justifyContent: 'center',
  },
  question: {
        fontSize: 24,
        fontFamily: 'Quicksand-Bold',
        textAlign: 'center',
        color: '#4c4c4c',
  },
  recordButtonWrapper: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 90
  },
  timer: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 20,
    marginBottom: 15,
    color: '#4c4c4c',
  },
  record: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  checkWrapper: {
    flex: 1,
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
