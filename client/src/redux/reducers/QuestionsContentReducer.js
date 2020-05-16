import {INITIALIZE_QUESTIONS, SET_CURRENT_QUESTION} from '../types';

const initialState = {
  currentQuestion: {},
  questions: [],
};

const questionsContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_QUESTIONS:
      return {...state, questions: action.payload};
    case SET_CURRENT_QUESTION:
      return {...state, currentQuestion: action.payload};
    default:
      return state;
  }
};

export default questionsContentReducer;
