import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, View} from 'react-native';
import {play} from '../../../redux/actions/ProgressActions';

const LessonStages = ({handlePlay}) => {
  return (
    <View>
      <Button title="Level 1" onPress={() => handlePlay(true)} />
      <Button title="Level 2" onPress={() => handlePlay(true)} />
    </View>
  );
};

LessonStages.propTypes = {
  handlePlay: PropTypes.func.isRequired,
};

export default connect(
  null,
  {handlePlay: play},
)(LessonStages);
