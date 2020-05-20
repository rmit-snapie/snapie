import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: windowHeight / 2,
    width: windowWidth,
  },
  modalView: {
    borderRadius: 16,
    width: '60%',
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    backgroundColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginMessage: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 14,
    marginBottom: 15,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 15,
    borderRadius: 6,
    padding: 10,
    textAlign: 'center',
  },
  actionsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  action: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  submit: {
    backgroundColor: '#1cb0f6',
  },
  cancel: {
    backgroundColor: '#e53838',
  },
  text: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 12,
    color: '#ffffff',
  },
  errorText: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 12,
    color: '#e53838',
    marginBottom: 15,
  },
});
