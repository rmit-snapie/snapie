import {
  COMPLETED_A_LEVEL,
  COMPLETED_A_QUESTION,
  COMPLETED_A_TEST,
  PLAY,
  STOP,
} from '../types';
import {getTestsQuestionsLength} from '../../helpers/QuestionHelper';
import {setLocalQuestions} from './QuestionsContentActions';

export function play() {
  return function(dispatch) {
    dispatch({type: PLAY});
  };
}

export function stop() {
  return function(dispatch) {
    dispatch({type: STOP});
  };
}

export function questionCompleted(stage, level, test, question) {
  return function(dispatch) {
    if (question === getTestsQuestionsLength(stage, level, test) - 1) {
      if (test < 2) {
        console.log('1 called');
        dispatch(testCompleted());
        dispatch(
          setLocalQuestions({
            stage: stage,
            level: level,
            test: test + 1,
          }),
        );
      } else if (test === 2) {
        console.log('2 called');
        dispatch(levelCompleted());
        dispatch(
          setLocalQuestions({
            stage: stage,
            level: level + 1,
            test: 0,
          }),
        );
      } else if (level === 3) {
        dispatch(stageCompleted());
        dispatch(
          setLocalQuestions({
            stage: stage,
            level: 0,
            test: 0,
          }),
        );
      }
    } else {
      dispatch({type: COMPLETED_A_QUESTION});
    }
  };
}

export function testCompleted() {
  return function(dispatch) {
    dispatch({type: COMPLETED_A_TEST});
  };
}

export function levelCompleted() {
  return function(dispatch) {
    dispatch({type: COMPLETED_A_LEVEL});
  };
}

export function stageCompleted() {
  return null;
}
