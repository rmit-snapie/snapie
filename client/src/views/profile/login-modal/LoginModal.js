import React, {useState} from 'react';
import {func, bool} from 'prop-types';
import {
  Modal,
  Dimensions,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  StyleSheet,
} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const LoginModal = ({display, closeModal}) => {
  const [username, setUserName] = useState('');

  return (
    <View style={styles.container}>
      <Modal animationType="fade" transparent={true} visible={display}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Text style={styles.loginMessage}>Enter your name here: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={text => setUserName(text)}
              value={username}
            />
            <View style={styles.actionsWrapper}>
              <TouchableHighlight
                style={[styles.action, styles.submit]}
                onPress={closeModal}>
                <Text style={styles.text}>Submit</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.action, styles.cancel]}
                onPress={closeModal}>
                <Text style={styles.text}>Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

LoginModal.propTypes = {
  display: bool.isRequired,
  closeModal: func.isRequired,
};
export default LoginModal;
