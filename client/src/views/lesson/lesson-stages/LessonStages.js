import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './LessonStagesStyle';
import {ScrollView, View} from 'react-native';
import {LEVELS_ICONS} from '../../assets/levels-icons';
import {play, replay} from '../../../redux/actions/ProgressActions';
import ImageButton from '../../image-button/ImageButton';

const LessonStages = ({
  handlePlay,
  handleReplay,
  progress: {stage, level, test},
}) => {
  const handlePress = (replayStage, replayLevel) => {
    if (replayStage <= stage && replayLevel < level) {
      handleReplay(replayStage, replayLevel);
    } else {
      handlePlay(stage, level, test);
    }
  };

  const isDisabled = (iconStage, iconLevel) => {
    if (iconStage > stage) {
      return true;
    }
    return iconStage === stage && iconLevel > level;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.stageWrapper}>
          <View style={styles.stageLevels}>
            {LEVELS_ICONS.stageOneC.map((icon, index) => (
              <ImageButton
                key={index}
                handlePress={() => handlePress(stage, index)}
                source={icon}
                disabled={isDisabled(0, index)}
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
          {stage < 2 ? (
            <View style={styles.stageLevels}>
              {LEVELS_ICONS.stageTwoG.map((icon, index) => (
                <ImageButton
                  key={index}
                  handlePress={() => handlePlay(true)}
                  source={icon}
                  disabled={isDisabled(1, index)}
                />
              ))}
            </View>
          ) : (
            <View style={styles.stageLevels}>
              {LEVELS_ICONS.stageTwoC.map((icon, index) => (
                <ImageButton
                  key={index}
                  handlePress={() => handlePlay(true)}
                  source={icon}
                  disabled={isDisabled(2, index)}
                />
              ))}
            </View>
          )}
        </View>
        <View
          pointerEvents={stage < 3 ? 'none' : 'auto'}
          style={
            stage < 3
              ? [styles.stageWrapper, styles.lockedStage]
              : styles.stageWrapper
          }>
          {stage < 3 ? (
            <View style={styles.stageLevels}>
              {LEVELS_ICONS.stageThreeG.map((icon, index) => (
                <ImageButton
                  key={index}
                  handlePress={() => handlePlay(true)}
                  source={icon}
                  disabled={stage === 2 && level !== index}
                />
              ))}
            </View>
          ) : (
            <View style={styles.stageLevels}>
              {LEVELS_ICONS.stageThreeC.map((icon, index) => (
                <ImageButton
                  key={index}
                  handlePress={() => handlePlay(true)}
                  source={icon}
                  disabled={stage === 2 && level !== index}
                />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

LessonStages.propTypes = {
  handlePlay: PropTypes.func.isRequired,
  handleReplay: PropTypes.func.isRequired,
  progress: PropTypes.object.isRequired,
};

export default connect(
  state => ({progress: state.progressReducer}),
  {handlePlay: play, handleReplay: replay},
)(LessonStages);
