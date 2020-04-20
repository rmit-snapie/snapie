import {COMPLETED_A_LEVEL, COMPLETED_A_STAGE, COMPLETED_A_TEST} from '../types';

const initialState = {
  stage: 1,
  level: 1,
  test: 1,
};

const progressReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPLETED_A_TEST:
      return {...state, test: action.payload};
    case COMPLETED_A_LEVEL:
      return {...state, level: action.payload};
    case COMPLETED_A_STAGE:
      return {...state, stage: action.payload};
    default:
      return state;
  }
};

export default progressReducer;
