import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

const ImageButton = ({screen, source, handlePress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
      <Image
        style={screen ? styles.mainScreen : styles.lessonScreen}
        source={source}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: '10%',
  },
  mainScreen: {
    width: 250,
    height: 97,
  },
  lessonScreen: {
    width: 75,
    height: 75,
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
