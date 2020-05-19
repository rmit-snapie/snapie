import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';

const Progress = ({testDone, maxTests, levelDone, levelLocked}) => {
  const testNotDone = maxTests - testDone;

  const generateRandomString = () => {
    return (
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15)
    );
  };

  const renderStars = () => {
    let stars = [];
    if (levelLocked) {
      for (let i = 0; i < maxTests; i++) {
        stars.push(
          <View key={generateRandomString()} style={styles.darkStar} />,
        );
      }
    } else {
      if (levelDone) {
        for (let i = 0; i < maxTests; i++) {
          stars.push(<View key={generateRandomString()} style={styles.star} />);
        }
      } else {
        for (let i = 0; i < testDone; i++) {
          stars.push(<View key={generateRandomString()} style={styles.star} />);
        }
        for (let i = 0; i < testNotDone; i++) {
          stars.push(
            <View key={generateRandomString()} style={styles.darkStar} />,
          );
        }
      }
    }

    return stars;
  };
  return <View style={styles.container}>{renderStars(maxTests)}</View>;
};

Progress.propTypes = {
  testDone: PropTypes.number.isRequired,
  maxTests: PropTypes.number.isRequired,
  levelDone: PropTypes.bool.isRequired,
  levelLocked: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 120,
  },
  star: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FF0000',
    padding: 5,
  },
  darkStar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'grey',
    padding: 5,
  },
});

export default Progress;
