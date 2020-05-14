import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';

const Progress = ({testDone, maxTests, levelDone, levelLocked}) => {
  // this function is only used for this component ONLY, so no need for a helper func
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

  // there are two cases levelLocked and levelIsNotLocked
  // if the level is locked, return all stars that are greyed
  // otherwise, there are two more cases: levelDone and levelIsNotDone
  // if levelDone, returns all red stars
  // otherwise, render red stars that represents completed tests
  // and grey stars that represents uncompleted tests
  const renderStars = () => {
    let stars = [];
    // default tests per level is 3, but can be changed in the future
    const testNotDone = maxTests - testDone;
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
