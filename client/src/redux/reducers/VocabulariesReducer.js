import {ADD_NEW_VOCABULARY, REMOVE_VOCABULARY} from '../types';

const initialState = {
  vocabularies: [],
  recentVocabularies: [],
};
let filteredState = [];

const vocabulariesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_VOCABULARY:
      if (state.recentVocabularies.length >= 3) {
        state.recentVocabularies.pop();
        state.recentVocabularies.unshift(action.payload);
      } else {
        state.recentVocabularies.unshift(action.payload);
      }
      return {...state, vocabularies: [...state.vocabularies, action.payload]};
    case REMOVE_VOCABULARY:
      filteredState = state.vocabularies.filter(
        vocabObj => vocabObj.word !== action.payload.word,
      );
      return {...state, vocabularies: [...state.vocabularies, filteredState]};
    default:
      return state;
  }
};

export default vocabulariesReducer;
