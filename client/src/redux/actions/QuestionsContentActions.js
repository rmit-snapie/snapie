import {INITIALIZE_LOCAL_QUESTIONS, INITIALIZE_QUESTIONS} from '../types';
export function setLocalQuestions(currentProgress) {
  return function(dispatch) {
    dispatch({
      type: INITIALIZE_LOCAL_QUESTIONS,
      payload: currentProgress,
    });
  };
}

export function setQuestions(data) {
  return function(dispatch) {
    dispatch({
      type: INITIALIZE_QUESTIONS,
      payload: data,
    });
  };
}

