import {INITIALIZE_QUESTIONS, SET_CURRENT_QUESTION} from '../types';

export function setQuestions(data) {
  return function(dispatch) {
    dispatch({
      type: INITIALIZE_QUESTIONS,
      payload: data,
    });
  };
}

export function setCurrentQuestion(data) {
  return function(dispatch) {
    dispatch({
      type: SET_CURRENT_QUESTION,
      payload: data,
    });
  };
}
