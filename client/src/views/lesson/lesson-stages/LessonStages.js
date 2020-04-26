import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './LessonStagesStyle';
import {Button, Text, View} from 'react-native';
import {play} from '../../../redux/actions/ProgressActions';

const LessonStages = ({handlePlay, progress: {stage, level, test}}) => {
  return (
    <View>
      <Text style={styles.text}>
        Stage - {stage} Level - {level} Test - {test}
      </Text>
      <View style={styles.levelsWrapper}>
        <Button title="Level 1" onPress={() => handlePlay(true)} />
        <Button title="Level 2" onPress={() => handlePlay(true)} />
      </View>
    </View>
  );
};

LessonStages.propTypes = {
  handlePlay: PropTypes.func.isRequired,
  progress: PropTypes.object.isRequired,
};

export default connect(
  state => ({progress: state.progressReducer}),
  {handlePlay: play},
)(LessonStages);
