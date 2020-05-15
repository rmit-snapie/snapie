import React from 'react';
import {func, object} from 'prop-types';
import {connect} from 'react-redux';
import styles from './LessonStagesStyle';
import {ScrollView, View} from 'react-native';
import {LEVELS_ICONS} from '../../assets/levels-icons';
import {play, replay} from '../../../redux/actions/ProgressActions';
import ImageButton from '../../../shared/components/image-button/ImageButton';
import ProgressIndicator from './progress/ProgressIndicator';

const LessonStages = ({
  handlePlay,
  handleReplay,
  progress: {stage, level, test},
}) => {
  const handlePress = (replayStage, replayLevel) => {
    if (replayStage < stage || replayLevel < level) {
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
                  handlePress={() => handlePress(0, index)}
                  source={icon}
                  disabled={isDisabled(0, index)}
                />
                <ProgressIndicator
                  testDone={test}
                  maxTests={3}
                  levelLocked={isDisabled(0, index)}
                  levelDone={index < level}
                  stageDone={stage > 0}
                />
              </View>
            ))}
          </View>
        </View>
        <View
          pointerEvents={stage >= 1 ? 'auto' : 'none'}
          style={
            stage >= 1
              ? styles.stageWrapper
              : [styles.stageWrapper, styles.lockedStage]
          }>
          {stage >= 1 ? (
            <View style={styles.stageLevels}>
              {LEVELS_ICONS.stageTwoC.map((icon, index) => (
                <View style={styles.iconWrapper} key={index}>
                  <ImageButton
                    key={index}
                    handlePress={() => handlePress(stage, index)}
                    source={icon}
                    disabled={isDisabled(1, index)}
                  />
                  <ProgressIndicator
                    testDone={test}
                    maxTests={3}
                    levelLocked={isDisabled(1, index)}
                    levelDone={index < level}
                    stageDone={stage > 1}
                  />
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.stageLevels}>
              {LEVELS_ICONS.stageTwoG.map((icon, index) => (
                <View style={styles.iconWrapper} key={index}>
                  <ImageButton
                    key={index}
                    handlePress={() => handlePress(stage, index)}
                    source={icon}
                    disabled={isDisabled(1, index)}
                  />
                  <ProgressIndicator
                    testDone={test}
                    maxTests={3}
                    levelLocked={isDisabled(1, index)}
                    levelDone={index < level}
                    stageDone={stage > 1}
                  />
                </View>
              ))}
            </View>
          )}
        </View>
        <View
          pointerEvents={stage >= 2 ? 'auto' : 'none'}
          style={
            stage >= 2
              ? stage.stageWrapper
              : [styles.stageWrapper, styles.lockedStage]
          }>
          {stage >= 2 ? (
            <View style={styles.stageLevels}>
              {LEVELS_ICONS.stageThreeC.map((icon, index) => (
                <View style={styles.iconWrapper} key={index}>
                  <ImageButton
                    key={index}
                    handlePress={() => handlePress(stage, index)}
                    source={icon}
                    disabled={isDisabled(2, index)}
                  />
                  <ProgressIndicator
                    testDone={test}
                    maxTests={3}
                    levelLocked={isDisabled(2, index)}
                    levelDone={index < level}
                    stageDone={stage > 2}
                  />
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.stageLevels}>
              {LEVELS_ICONS.stageThreeG.map((icon, index) => (
                <View style={styles.iconWrapper} key={index}>
                  <ImageButton
                    key={index}
                    handlePress={() => handlePress(stage, index)}
                    source={icon}
                    disabled={isDisabled(2, index)}
                  />
                  <ProgressIndicator
                    testDone={test}
                    maxTests={3}
                    levelLocked={isDisabled(2, index)}
                    levelDone={index < level}
                    stageDone={stage > 2}
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
  handlePlay: func.isRequired,
  handleReplay: func.isRequired,
  progress: object.isRequired,
};

export default connect(
  state => ({progress: state.progressReducer}),
  {handlePlay: play, handleReplay: replay},
)(LessonStages);
