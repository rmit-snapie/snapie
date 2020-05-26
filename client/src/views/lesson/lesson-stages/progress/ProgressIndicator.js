import React from 'react';
import {number, bool} from 'prop-types';
import {View, Image, StyleSheet} from 'react-native';

const ProgressIndicator = ({
  testDone,
  maxTests,
  levelDone,
  stageDone,
  levelLocked,
}) => {
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
    // default tests per level is 3, but can be changed in the future
    const testNotDone = maxTests - testDone;
    if (levelLocked) {
      for (let i = 0; i < maxTests; i++) {
        stars.push(
          <Image
            source={require('../assets/GrayStar.png')}
            key={generateRandomString()}
            style={styles.star}
          />,
        );
      }
    } else {
      if (levelDone || stageDone) {
        for (let i = 0; i < maxTests; i++) {
          stars.push(
            <Image
              source={require('../assets/GoldStar.png')}
              key={generateRandomString()}
              style={styles.star}
            />,
          );
        }
      } else {
        for (let i = 0; i < testDone; i++) {
          stars.push(
            <Image
              source={require('../assets/GoldStar.png')}
              key={generateRandomString()}
              style={styles.star}
            />,
          );
        }
        for (let i = 0; i < testNotDone; i++) {
          stars.push(
            <Image
              source={require('../assets/GrayStar.png')}
              key={generateRandomString()}
              style={styles.star}
            />,
          );
        }
      }
    }

    return stars;
  };
  return <View style={styles.container}>{renderStars(maxTests)}</View>;
};

ProgressIndicator.propTypes = {
  testDone: number.isRequired,
  maxTests: number.isRequired,
  levelDone: bool.isRequired,
  stageDone: bool.isRequired,
  levelLocked: bool.isRequired,
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
    borderRadius: 10,
    padding: 5,
    marginTop: -10,
    resizeMode: 'contain',
  },
});

export default ProgressIndicator;
