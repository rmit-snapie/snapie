import React from 'react';
import {
  Image,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';

const windowWidth = Dimensions.get('window').width;

const MultipleChoiceModal = ({modalOpen, setModalOpen, sad}) => {
  const imagePath = sad
    ? require('../../domainModels/assets/sad.png')
    : require('../../domainModels/assets/confetti.png');
  return (
    <Modal
      isVisible={modalOpen}
      animationTiming={100}
      animationOutTiming={100}
      onBackdropPress={() => setModalOpen(false)}>
      <View>
        <TouchableWithoutFeedback onPress={() => setModalOpen(false)}>
          <Image source={imagePath} style={styles.image} />
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
    marginLeft: windowWidth / 4,
  },
});

export default MultipleChoiceModal;
