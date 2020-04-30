import {
  COMPLETED_A_LEVEL,
  COMPLETED_A_QUESTION,
  COMPLETED_A_TEST,
  PLAY,
  STOP,
} from '../types';
import {getTestsQuestionsLength} from '../../helpers/QuestionHelper';

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
      dispatch(stop());
      dispatch(testCompleted());
    } else {
      dispatch({type: COMPLETED_A_QUESTION});
    }
  };
}

export function testCompleted(test) {
  if (test === 3) {
    levelCompleted();
  }
  return function(dispatch) {
    dispatch({type: COMPLETED_A_TEST});
  };
}

export function levelCompleted(level) {
  return function(dispatch) {
    dispatch({type: COMPLETED_A_LEVEL, payload: level});
  };
}
