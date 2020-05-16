import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {func, bool, object, string, arrayOf} from 'prop-types';
import styles from './CheersStyle';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {
  stop,
  replayQuestionCompleted,
  testCompleted,
  levelCompleted,
  stageCompleted,
  questionCompleted,
} from '../../redux/actions/ProgressActions';
import {playCheers, playSad} from '../../helpers/AudioHelper';
import {stopAudio} from '../../helpers/AudioHelper';
import {
  getNumberOfTests,
  getNumberOfQuestions,
  getTestQuestions,
  getNumberOfLevels,
} from '../../helpers/QuestionHelper';
import {
  setQuestions,
  setCurrentQuestion,
} from '../../redux/actions/QuestionsContentActions';
const Cheers = ({sad, correctAnswer, progress, ...props}) => {
  const {stage, level, test, question} = progress.replay.play
    ? progress.replay
    : progress;
  const imagePath = sad
    ? require('./assets/sad.gif')
    : require('./assets/cheers.gif');

  useEffect(() => {
    if (sad) {
      playSad();
    } else {
      playCheers();
    }
  }, [sad]);

  const handleContinue = async () => {
    await stopAudio();
    if (progress.replay.play) {
      if (question === getNumberOfQuestions(stage, level, test)) {
        props.stop();
      } else {
        props.replayQuestionCompleted();
      }
    } else {
      // if last question
      if (question === getNumberOfQuestions(stage, level, test)) {
        // of last test of last level: next stage
        if (
          test === getNumberOfTests(stage, level) &&
          level === getNumberOfLevels(stage)
        ) {
          props.stageCompleted();
          getTestQuestions({
            stage: stage + 1,
            level: 0,
            test: 0,
          }).then(data => {
            props.setCurrentQuestion(data[0]);
            return props.prepareData(data);
          });
        } else if (test === 2) {
          props.levelCompleted();
          getTestQuestions({
            stage: stage,
            level: level + 1,
            test: 0,
          }).then(data => {
            props.setCurrentQuestion(data[0]);
            return props.prepareData(data);
          });
        } else if (test < 2) {
          // next test:
          props.testCompleted();
          getTestQuestions({
            stage: stage,
            level: level,
            test: test + 1,
          }).then(data => {
            props.setCurrentQuestion(data[0]);
            return props.prepareData(data);
          });
        }
      } else {
        let nextQuestionIndex = question + 1;
        if (
          nextQuestionIndex ===
          getNumberOfQuestions(stage, level, test) + 1
        ) {
          console.error('next question over index........', nextQuestionIndex);
        }
        props.setCurrentQuestion(props.questions[nextQuestionIndex]);
        return props.questionCompleted(nextQuestionIndex);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.gifWrapper}>
        <Image source={imagePath} style={styles.image} />
      </View>
      <View style={styles.correctAnswerWrapper}>
        {sad && (
          <Text style={styles.correctAnswer}>
            The correct answer was {correctAnswer}
          </Text>
        )}
      </View>
      <View style={styles.continueButtonWrapper}>
        <TouchableOpacity
          onPress={() => handleContinue()}
          style={styles.continueButton}>
          <Text style={styles.continueTitle}> Continue </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Cheers.defaultProps = {
  correctAnswer: '',
};

Cheers.propTypes = {
  cheers: bool.isRequired,
  sad: bool.isRequired,
  correctAnswer: string,
  progress: object.isRequired,
  questions: arrayOf(object).isRequired,
  replayQuestionCompleted: func.isRequired,
  setCurrentQuestion: func.isRequired,
  stageCompleted: func.isRequired,
  levelCompleted: func.isRequired,
  testCompleted: func.isRequired,
  questionCompleted: func.isRequired,
  prepareData: func.isRequired,
  stop: func.isRequired,
};

export default connect(
  state => ({
    progress: state.progressReducer,
    questions: state.questionsContentReducer.questions,
  }),
  {
    stop: stop,
    replayQuestionCompleted: replayQuestionCompleted,
    prepareData: setQuestions,
    testCompleted: testCompleted,
    levelCompleted: levelCompleted,
    stageCompleted: stageCompleted,
    questionCompleted: questionCompleted,
    setCurrentQuestion: setCurrentQuestion,
  },
)(Cheers);
