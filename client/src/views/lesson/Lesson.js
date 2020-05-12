import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './LessonStyle';
import {View} from 'react-native';

//components
import LessonContent from './lesson-content/LessonContent';
import LessonStages from './lesson-stages/LessonStages';

const Lesson = play => {
  return (
    <View style={styles.container}>
      {!play && <LessonStages />}
      {play && <LessonContent />}
    </View>
  );
};

Lesson.propTypes = {
  play: PropTypes.bool.isRequired,
};

export default connect(
  state => ({
    play: state.progressReducer.play,
  }),
  null,
)(Lesson);
