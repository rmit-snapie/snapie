import {ADD_NEW_VOCABULARY, REMOVE_VOCABULARY} from '../types';

export function addNewVocab(word) {
  return function(dispatch) {
    dispatch({type: ADD_NEW_VOCABULARY, payload: word});
  };
}

export function removeVocab(word) {
  return function(dispatch) {
    dispatch({type: REMOVE_VOCABULARY, payload: word});
  };
}
