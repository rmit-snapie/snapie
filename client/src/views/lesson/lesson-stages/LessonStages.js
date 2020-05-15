import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './LessonStagesStyle';
import {View, ScrollView} from 'react-native';
import {LEVELS_ICONS} from '../../assets/levels-icons';
import {play, replay} from '../../../redux/actions/ProgressActions';
import ImageButton from '../../image-button/ImageButton';
import Progress from './progress/Progress';
import {getNumberOfTests} from '../../../helpers/QuestionHelper';

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
              <View style={styles.iconWrapper} key={index}>
                <ImageButton
                  key={index}
                  handlePress={() => handlePress(stage, index)}
                  source={icon}
                  disabled={isDisabled(0, index)}
                />
                <Progress
                  testDone={test}
                  maxTests={getNumberOfTests(0, index) + 1}
                  levelLocked={isDisabled(0, index)}
                  levelDone={index < level}
                />
              </View>
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
                <View style={styles.iconWrapper} key={index}>
                  <ImageButton
                    key={index}
                    handlePress={() => handlePress(stage, index)}
                    source={icon}
                    disabled={isDisabled(1, index)}
                  />
                  <Progress
                    testDone={test}
                    maxTests={3}
                    levelLocked={isDisabled(1, index)}
                    levelDone={index < level}
                  />
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.stageLevels}>
              {LEVELS_ICONS.stageTwoC.map((icon, index) => (
                <View style={styles.iconWrapper} key={index}>
                  <ImageButton
                    key={index}
                    handlePress={() => handlePress(stage, index)}
                    source={icon}
                    disabled={isDisabled(1, index)}
                  />
                  <Progress
                    testDone={test}
                    maxTests={3}
                    levelLocked={isDisabled(1, index)}
                    levelDone={index < level}
                  />
                </View>
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
                <View style={styles.iconWrapper} key={index}>
                  <ImageButton
                    key={index}
                    handlePress={() => handlePress(stage, index)}
                    source={icon}
                    disabled={isDisabled(2, index)}
                  />
                  <Progress
                    testDone={test}
                    maxTests={3}
                    levelLocked={isDisabled(2, index)}
                    levelDone={index < level}
                  />
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.stageLevels}>
              {LEVELS_ICONS.stageThreeC.map((icon, index) => (
                <View style={styles.iconWrapper} key={index}>
                  <ImageButton
                    key={index}
                    handlePress={() => handlePress(stage, index)}
                    source={icon}
                    disabled={isDisabled(2, index)}
                  />
                  <Progress
                    testDone={test}
                    maxTests={3}
                    levelLocked={isDisabled(2, index)}
                    levelDone={index < level}
                  />
                </View>
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
