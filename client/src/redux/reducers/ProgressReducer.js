import {
  COMPLETED_A_LEVEL,
  COMPLETED_A_QUESTION,
  COMPLETED_A_REPLAY_QUESTION,
  COMPLETED_A_STAGE,
  COMPLETED_A_TEST,
  PLAY,
  REPLAY,
  STOP,
  SET_PROGRESS,
} from '../types';

const initialState = {
  play: false,
  stage: 0,
  level: 0,
  test: 0,
  question: 0,
  replay: {
    start: true,
    stage: 0,
    level: 0,
    test: 0,
    question: 0,
  },
};

let stage, level, test;

const progressReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY:
      return {...state, play: true, replay: {start: false}};
    case REPLAY:
      ({stage, level, test} = action.payload);
      return {
        ...state,
        play: true,
        replay: {
          start: true,
          stage: stage,
          level: level,
          test: test,
          question: 0,
        },
      };
    case STOP:
      return {
        ...state,
        play: false,
        replay: {start: false, stage: 0, level: 0, test: 0},
      };
    case COMPLETED_A_QUESTION:
      // console.log(
      //   'progressReducer: completed a question > increase question to: ',
      // );
      return {...state, question: state.question + 1};
    case COMPLETED_A_REPLAY_QUESTION:
      return {
        ...state,
        replay: {...state.replay, question: state.replay.question + 1},
      };
    case COMPLETED_A_TEST:
      return {...state, test: state.test + 1, question: 0, play: false};
    case COMPLETED_A_LEVEL:
      return {
        ...state,
        level: state.level + 1,
        test: 0,
        question: 0,
        play: false,
      };
    case COMPLETED_A_STAGE:
      return {...state, stage: state.stage + 1, level: 0, test: 0, question: 0};
    case SET_PROGRESS:
      ({stage, level, test, question} = action.payload);
      console.log('progressreducer > setprogress > param: '.action.payload);
      return {
        ...state,
        stage: stage,
        level: level,
        test: test,
        question: question,
      };
    default:
      return state;
  }
};

export default progressReducer;
