import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './LessonStagesStyle';
import {Button, View, ScrollView} from 'react-native';
import {LEVELS_ICONS} from '../../assets/levels-icons';
import {play} from '../../../redux/actions/ProgressActions';
import ImageButton from '../../image-button/ImageButton';

const LessonStages = ({handlePlay, progress: {stage}}) => {
  return (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.contentcontainer}>
        <View style={styles.stageWrapper}>
          <View style={styles.stageLevels}>
            {LEVELS_ICONS.stageOne.map((icon, index) => (
              <ImageButton
                key={index}
                handlePress={() => handlePlay(true)}
                source={icon}
              />
            ))}
          </View>
        </View>
        <View
          pointerEvents={stage < 2 ? 'none' : 'auto'}
          style={
            stage < 2
              ? [styles.stageWrapper, styles.lockedStage]
              : styles.stageWrapper
          }>
          <View style={styles.stageLevels}>
            <Button title="Level 1" onPress={() => handlePlay(true)} />
            <Button title="Level 2" onPress={() => handlePlay(true)} />
            <Button title="Level 3" onPress={() => handlePlay(true)} />
          </View>
        </View>
        <View
          pointerEvents={stage < 3 ? 'none' : 'auto'}
          style={
            stage < 3
              ? [styles.stageWrapper, styles.lockedStage]
              : styles.stageWrapper
          }>
          <View style={styles.stageLevels}>
            <Button title="Level 1" onPress={() => handlePlay(true)} />
            <Button title="Level 2" onPress={() => handlePlay(true)} />
            <Button title="Level 3" onPress={() => handlePlay(true)} />
          </View>
        </View>
      </ScrollView>
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
