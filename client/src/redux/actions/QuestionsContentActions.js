import {
  INITIALIZE_LOCAL_QUESTIONS,
  INITIALIZE_ONLINE_QUESTIONS,
} from '../types';

export function setLocalQuestions(currentProgress) {
  return function(dispatch) {
    dispatch({
      type: INITIALIZE_LOCAL_QUESTIONS,
      payload: currentProgress,
    });
  };
}

export function setOnlineQuestions(currentProgress) {
  return function(dispatch) {
    dispatch({
      type: INITIALIZE_ONLINE_QUESTIONS,
      payload: currentProgress,
    });
  };
}
