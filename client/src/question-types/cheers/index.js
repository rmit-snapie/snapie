import React from 'react';
import {connect} from 'react-redux';
import {func, bool, object, string, arrayOf} from 'prop-types';
import {stopAudio} from '../../helpers/AudioHelper';
import {
  getNumberOfLevels,
  getNumberOfQuestions,
  getNumberOfTests,
  getTestQuestions,
} from '../../helpers/QuestionHelper';
import Cheers from './Cheers';
import {
  levelCompleted,
  questionCompleted,
  replayQuestionCompleted,
  stageCompleted,
  stop,
  testCompleted,
} from '../../redux/actions/ProgressActions';
import {
  incrementQuestionCounter,
  incrementTestCounter,
  incrementLevelCounter,
  incrementStageCounter,
} from '../../redux/actions/ProgressCounterActions';
import {
  setCurrentQuestion,
  setQuestions,
} from '../../redux/actions/QuestionsContentActions';

export const CheersWrapper = ({sad, correctAnswer, progress, ...props}) => {
  const {stage, level, test, question} = progress.replay.play
    ? progress.replay
    : progress;
  const handleContinue = async () => {
    await stopAudio();
    if (progress.replay.play) {
      if (question === getNumberOfQuestions(stage, level, test)) {
        props.stop();
      } else {
        props.replayQuestionCompleted();
      }
    } else {
      props.incrementQuestionCounter();
      if (question === getNumberOfQuestions(stage, level, test)) {
        if (
          test === getNumberOfTests(stage, level) &&
          level === getNumberOfLevels(stage)
        ) {
          props.stageCompleted();
          props.incrementStageCounter();
          props.incrementLevelCounter();
          props.incrementTestCounter();
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
          props.incrementLevelCounter();
          props.incrementTestCounter();
          getTestQuestions({
            stage: stage,
            level: level + 1,
            test: 0,
          }).then(data => {
            props.setCurrentQuestion(data[0]);
            return props.prepareData(data);
          });
        } else if (test < 2) {
          props.testCompleted();
          props.incrementTestCounter();
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
    <Cheers
      sad={sad}
      correctAnswer={correctAnswer}
      progress={progress}
      handleContinueQuestion={handleContinue}
    />
  );
};

CheersWrapper.defaultProps = {
  correctAnswer: '',
};

CheersWrapper.propTypes = {
  questions: arrayOf(object).isRequired,
  sad: bool.isRequired,
  correctAnswer: string,
  progress: object.isRequired,
  replayQuestionCompleted: func.isRequired,
  questionCompleted: func.isRequired,
  testCompleted: func.isRequired,
  levelCompleted: func.isRequired,
  stageCompleted: func.isRequired,
  stop: func.isRequired,
  prepareData: func.isRequired,
  setCurrentQuestion: func.isRequired,
  incrementQuestionCounter: func.isRequired,
  incrementTestCounter: func.isRequired,
  incrementLevelCounter: func.isRequired,
  incrementStageCounter: func.isRequired,
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
    incrementQuestionCounter: incrementQuestionCounter,
    incrementTestCounter: incrementTestCounter,
    incrementLevelCounter: incrementLevelCounter,
    incrementStageCounter: incrementStageCounter,
  },
)(CheersWrapper);
