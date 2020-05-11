import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Camera from './camera/Camera';

const FindTheObject = () => {
  const [mockQuestion] = useState('Take a photo of this');

  return (
    <View style={styles.container}>
      <View style={styles.questionWRapper}>
        <Text style={styles.questionContent}>{mockQuestion}</Text>
      </View>
      <View style={styles.cameraWrapper}>
        <Camera />
      </View>
      <View style={styles.checkButtonWrapper}>
        <TouchableOpacity style={styles.checkButton}>
          <Text style={styles.check}>Press Me</Text>
        </TouchableOpacity>
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
  questionWRapper: {
    flex: 1,
    justifyContent: 'center',
  },
  questionContent: {
    fontFamily: 'Amiko-Bold',
    fontSize: 24,
  },
  cameraWrapper: {
    flex: 5,
  },
  checkButtonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkButton: {
    width: 300,
    height: 50,
    borderRadius: 16,
    backgroundColor: '#F7ab5f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  check: {
    fontFamily: 'Amiko-Bold',
    fontSize: 16,
    color: '#ffffff',
  },
});

export default FindTheObject;
