import {
  INCREMENT_LEVEL_COUNTER,
  INCREMENT_QUESTION_COUNTER,
  INCREMENT_STAGE_COUNTER,
  INCREMENT_TEST_COUNTER,
} from '../types';

const initialState = {
  questionsCompleted: 0,
  testsCompleted: 0,
  levelsCompleted: 0,
  stagesCompleted: 0,
};

const progressCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_QUESTION_COUNTER:
      return {...state, questionsCompleted: state.questionsCompleted + 1};
    case INCREMENT_TEST_COUNTER:
      return {...state, testsCompleted: state.testsCompleted + 1};
    case INCREMENT_LEVEL_COUNTER:
      return {...state, levelsCompleted: state.levelsCompleted + 1};
    case INCREMENT_STAGE_COUNTER:
      return {...state, stagesCompleted: state.stagesCompleted + 1};
    default:
      return state;
  }
};

export default progressCounterReducer;
