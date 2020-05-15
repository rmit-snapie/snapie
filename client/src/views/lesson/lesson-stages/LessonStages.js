import React from 'react';
import {func, object} from 'prop-types';
import {connect} from 'react-redux';
import styles from './LessonStagesStyle';
import {ScrollView, View} from 'react-native';
import {LEVELS_ICONS} from '../../assets/levels-icons';
import {
  play,
  replay,
  setProgress,
} from '../../../redux/actions/ProgressActions';

import ImageButton from '../../image-button/ImageButton';
import Progress from './progress/Progress';
import {setQuestions} from '../../../redux/actions/QuestionsContentActions';
import {getOnlineQuestions} from '../../../helpers/OnlineQuestionHelper';
import {
  getTestQuestions,
  getNumberOfTests,
} from '../../../helpers/QuestionHelper';

const LessonStages = ({
  handlePlay,
  handleReplay,
  progress: {stage, level, test},
  prepareData,
}) => {
  const handlePress = (replayStage, replayLevel) => {
    if (replayStage <= stage && replayLevel < level) {
      const lastTest = getNumberOfTests(replayStage, replayLevel);
      getTestQuestions({
        stage: replayStage,
        level: replayLevel,
        test: lastTest,
      }).then(data => {
        console.log('lessonStages > handlepress > replay  > resutl: ', data);
        prepareData(data);
      });
      handleReplay(replayStage, replayLevel);
    } else {
      getTestQuestions({stage: stage, level: level, test: test}).then(data => {
        console.log(
          'lessonStages > handlepress > getTestQuestions > resutl: ',
          data,
        );
        prepareData(data);
      });
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
                  maxTests={3}
                  levelLocked={isDisabled(0, index)}
                  levelDone={index < level}
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
                  <Progress
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
                  <Progress
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
                  <Progress
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
                  <Progress
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
  prepareData: func.isRequired,
  progress: object.isRequired,
};

export default connect(
  state => ({progress: state.progressReducer}),
  {
    handlePlay: play,
    handleReplay: replay,
    prepareData: setQuestions,
    setProgress: setProgress,
  },
)(LessonStages);
