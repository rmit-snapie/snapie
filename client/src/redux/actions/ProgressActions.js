import {COMPLETED_A_QUESTION, COMPLETED_A_TEST, PLAY, STOP} from '../types';

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

export function questionCompleted(question) {
  return function(dispatch) {
    dispatch({type: COMPLETED_A_QUESTION, payload: question});
  };
}

export function testCompleted(test) {
  return function(dispatch) {
    dispatch({type: COMPLETED_A_TEST, payload: test});
  };
}
