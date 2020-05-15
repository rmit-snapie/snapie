import {
  INCREMENT_LEVEL_COUNTER,
  INCREMENT_QUESTION_COUNTER,
  INCREMENT_STAGE_COUNTER,
  INCREMENT_TEST_COUNTER,
} from '../types';

export function incrementQuestionCounter() {
  return function(dispatch) {
    dispatch({type: INCREMENT_QUESTION_COUNTER});
  };
}
export function incrementTestCounter() {
  return function(dispatch) {
    dispatch({type: INCREMENT_TEST_COUNTER});
  };
}
export function incrementLevelCounter() {
  return function(dispatch) {
    dispatch({type: INCREMENT_LEVEL_COUNTER});
  };
}
export function incrementStageCounter() {
  return function(dispatch) {
    dispatch({type: INCREMENT_STAGE_COUNTER});
  };
}
