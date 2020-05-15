import React from 'react';
import {bool, func, string} from 'prop-types';
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const SnapieModal = ({
  display,
  setDisplay,
  message,
  animationType,
  manualClose,
  type,
}) => {
  const colorObject = () => {
    if (type === 'success') {
      return {backgroundColor: '#78c800'};
    } else if (type === 'error') {
      return {backgroundColor: '#ff4b4b'};
    }
  };
  return (
    <View style={styles.container}>
      <Modal animationType={animationType} transparent={true} visible={display}>
        <View style={styles.container}>
          <View style={[styles.modalView, colorObject()]}>
            <Text style={styles.message}>{message}</Text>
            {manualClose && (
              <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                  setDisplay(false);
                }}>
                <Text style={styles.textStyle}>OK</Text>
              </TouchableHighlight>
            )}
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
    bottom: 50,
    width: windowWidth,
  },
  modalView: {
    borderRadius: 16,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#84d0f7',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  message: {
    fontFamily: 'Amiko-Bold',
    color: '#ffffff',
  },
});

SnapieModal.defaultProps = {
  manualClose: false,
};

SnapieModal.propTypes = {
  display: bool.isRequired,
  setDisplay: func.isRequired,
  message: string.isRequired,
  animationType: string.isRequired,
  manualClose: bool,
  type: string.isRequired,
};

export default SnapieModal;
