import {ADD_NEW_VOCABULARY, REMOVE_VOCABULARY} from '../types';

const initialState = [];
let filteredState = [];

const vocabulariesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_VOCABULARY:
      return [...state, action.payload];
    case REMOVE_VOCABULARY:
      filteredState = state.filter(
        vocabObj => vocabObj.word !== action.payload.word,
      );
      return [...state, filteredState];
    default:
      return state;
  }
};

export default vocabulariesReducer;
