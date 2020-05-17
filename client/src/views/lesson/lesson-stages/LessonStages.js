import React from 'react';
import {func, object} from 'prop-types';
import {connect} from 'react-redux';
import styles from './LessonStagesStyle';
import {ScrollView, View} from 'react-native';
import {LEVELS_ICONS} from '../../assets/levels-icons';
import {play, replay} from '../../../redux/actions/ProgressActions';
import {
  setQuestions,
  setCurrentQuestion,
} from '../../../redux/actions/QuestionsContentActions';
import {
  getTestQuestions,
  getNumberOfTests,
} from '../../../helpers/QuestionHelper';
import ImageButton from '../../../shared/components/image-button/ImageButton';
import ProgressIndicator from './progress/ProgressIndicator';

const LessonStages = ({
  handlePlay,
  handleReplay,
  progress: {stage, level, test},
  ...props
}) => {
  const handlePress = (replayStage, replayLevel) => {
    if (replayStage < stage || replayLevel < level) {
      const lastTest = getNumberOfTests(replayStage, replayLevel);
      getTestQuestions({
        stage: replayStage,
        level: replayLevel,
        test: lastTest,
      }).then(data => {
        console.log(data);
        props.setCurrentQuestion(data[0]);
        props.prepareData(data);
        handleReplay(replayStage, replayLevel);
      });
    } else {
      getTestQuestions({stage: stage, level: level, test: test}).then(data => {
        props.setCurrentQuestion(data[0]);
        props.prepareData(data);
        handlePlay(stage, level, test);
      });
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
                    handlePress={() => handlePress(1, index)}
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
                    handlePress={() => handlePress(1, index)}
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
              ? styles.stageWrapper
              : [styles.stageWrapper, styles.lockedStage]
          }>
          {stage >= 2 ? (
            <View style={styles.stageLevels}>
              {LEVELS_ICONS.stageThreeC.map((icon, index) => (
                <View style={styles.iconWrapper} key={index}>
                  <ImageButton
                    key={index}
                    handlePress={() => handlePress(2, index)}
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
                    handlePress={() => handlePress(2, index)}
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
  prepareData: func.isRequired,
  progress: object.isRequired,
  setCurrentQuestion: func.isRequired,
};

export default connect(
  state => ({
    progress: state.progressReducer,
    questions: state.questionsContentReducer.testQuestions,
  }),
  {
    handlePlay: play,
    handleReplay: replay,
    prepareData: setQuestions,
    setCurrentQuestion: setCurrentQuestion,
  },
)(LessonStages);
