import {
  COMPLETED_A_LEVEL,
  COMPLETED_A_QUESTION,
  COMPLETED_A_STAGE,
  COMPLETED_A_TEST,
  PLAY,
  STOP,
} from '../types';

const initialState = {
  stage: 0,
  level: 0,
  test: 0,
  question: 0,
  play: false,
};

const progressReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY:
      return {...state, play: true};
    case STOP:
      return {...state, play: false, question: 0};
    case COMPLETED_A_QUESTION:
      return {...state, question: state.question + 1};
    case COMPLETED_A_TEST:
      return {...state, test: state.test + 1, question: 0};
    case COMPLETED_A_LEVEL:
      return {...state, level: state.level + 1, test: 0, question: 0};
    case COMPLETED_A_STAGE:
      return {...state, stage: action.payload};
    default:
      return state;
  }
};

export default progressReducer;
