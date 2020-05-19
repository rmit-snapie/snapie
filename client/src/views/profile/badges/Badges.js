import React from 'react';
import {object} from 'prop-types';
import {connect} from 'react-redux';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {BADGES} from './assets/index';

const windowWidth = Dimensions.get('window').width;

const Badges = ({progressCounter: {levelsCompleted}}) => {
  const renderBadges = () => {
    const badges = [];
    for (let i = 0; i < levelsCompleted; i++) {
      badges.push(
        <View key={i} style={styles.badgeWrapper}>
          <Image style={styles.image} source={BADGES.color[i]} />
        </View>,
      );
    }
    for (let i = levelsCompleted; i < 12; i++) {
      badges.push(
        <View key={i} style={styles.badgeWrapper}>
          <Image style={styles.image} source={BADGES.grey[i]} />
        </View>,
      );
    }
    return badges;
  };
  return <View style={styles.row}>{renderBadges()}</View>;
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignContent: 'center',
  },
  badgeWrapper: {
    width: windowWidth / 3.3,
    alignItems: 'center',
    padding: 5,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

Badges.propTypes = {
  progressCounter: object.isRequired,
};

export default connect(
  state => ({progressCounter: state.progressCounterReducer}),
  null,
)(Badges);
