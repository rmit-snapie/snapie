import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

const ImageButton = ({screen, source, handlePress, disabled}) => {
  return (
    <TouchableOpacity onPress={() => handlePress()} disabled={disabled}>
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
    width: 130,
    height: 172,
    marginTop: 15,
    marginBottom: 15
  },
});

ImageButton.defaultProps = {
  screen: false,
  disabled: false,
};

ImageButton.propTypes = {
  source: PropTypes.number.isRequired,
  handlePress: PropTypes.func.isRequired,
  screen: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default ImageButton;
