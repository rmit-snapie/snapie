import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

const ImageButton = ({screen, source, handlePress}) => {
  return (
    <TouchableOpacity onPress={() => handlePress()}>
      <Image
        style={screen ? styles.mainScreen : styles.lessonScreen}
        source={source}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    width: 356,
    height: 136,
    resizeMode: 'contain',
  },
  lessonScreen: {
    width: 133,
    height: 133,
    marginBottom: 15
//        height: 133,
  },
});

ImageButton.defaultProps = {
  screen: false,
};

ImageButton.propTypes = {
  source: PropTypes.number.isRequired,
  handlePress: PropTypes.func.isRequired,
  screen: PropTypes.bool,
};

export default ImageButton;
