import React from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, Image} from 'react-native';
const TestCircle = require('../../../shared/assets/ProfileTestCircle.png');
const LevelCircle = require('../../../shared/assets/ProfileLevelCircle.png');
const WordCircle = require('../../../shared/assets/ProfileWordCircle.png');
const BadgeCircle = require('../../../shared/assets/ProfileBadgeCircle.png');

const Progress = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.tests}>
          <View style={styles.centeredView}>
            <Image style={styles.image} source={TestCircle} />
            <Text style={styles.absoluteText}>Hello World</Text>
          </View>
        </View>
        <View style={styles.levels}>
          <View style={styles.centeredView}>
            <Image style={styles.biggerImage} source={LevelCircle} />
            <Text style={styles.absoluteText}>Hello World</Text>
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.words}>
          <View style={styles.centeredView}>
            <Image style={styles.biggerImage} source={WordCircle} />
            <Text style={styles.absoluteText}>Hello World</Text>
          </View>
        </View>
        <View style={styles.badges}>
          <View style={styles.centeredView}>
            <Image style={styles.image} source={BadgeCircle} />
            <Text style={styles.absoluteText}>Hello World</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 2,
    flexDirection: 'row',
    borderWidth: 1,
  },
  image: {
    width: 175,
    height: 175,
    resizeMode: 'contain',
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  absoluteText: {
    position: 'absolute',
  },
  biggerImage: {
    width: 225,
    height: 225,
    resizeMode: 'contain',
    borderWidth: 1,
  },
  tests: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
  },
  levels: {
    justifyContent: 'flex-end',
    borderWidth: 1,
  },
  words: {
    justifyContent: 'flex-start',
    borderWidth: 1,
  },
  badges: {
    justifyContent: 'flex-end',
    borderWidth: 1,
  },
});

export default connect(
  state => ({progress: state.progressReducer}),
  null,
)(Progress);
