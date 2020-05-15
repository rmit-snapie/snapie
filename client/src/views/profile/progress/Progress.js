import React from 'react';
import {View, StyleSheet} from 'react-native';

const Progress = () => {
  return <View />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  tests: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  levels: {
    justifyContent: 'flex-start',
    alignItems: 'baseline',
  },
  rewards: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  words: {
    justifyContent: 'flex-start',
    alignItems: 'baseline',
  },
});

export default Progress;
