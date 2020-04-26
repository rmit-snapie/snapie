import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './LessonStyle';
import {View} from 'react-native';
import TempLesson from './temp-lesson/TempLesson';
import LessonStages from './LessonStages';

const Lesson = ({progress: {play}}) => {
  return (
    <View style={styles.container}>
      {!play && <LessonStages />}
      {play && <TempLesson />}
    </View>
  );
};

Lesson.propTypes = {
  progress: PropTypes.object.isRequired,
};

export default connect(
  state => ({progress: state.progressReducer}),
  null,
)(Lesson);
