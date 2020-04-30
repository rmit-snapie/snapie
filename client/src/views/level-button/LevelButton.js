import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

const LevelButton = ({source, handlePress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
      <Image style={styles.image} source={source} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: '10%',
  },
  image: {
    width: 75,
    height: 75,
  },
});

LevelButton.propTypes = {
  source: PropTypes.number.isRequired,
  handlePress: PropTypes.func.isRequired,
};

export default LevelButton;
