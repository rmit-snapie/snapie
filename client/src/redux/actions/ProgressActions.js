import {
  COMPLETED_A_LEVEL,
  COMPLETED_A_QUESTION,
  COMPLETED_A_REPLAY_QUESTION,
  COMPLETED_A_STAGE,
  COMPLETED_A_TEST,
  PLAY,
  REPLAY,
  STOP,
  STOP_REPLAY,
} from '../types';
import {getNumberOfTests} from '../../helpers/QuestionHelper';

export function play() {
  return function(dispatch) {
    dispatch({type: PLAY});
  };
}

export function replay(stage: number, level: number) {
  const lastTest = getNumberOfTests(stage, level);
  return function(dispatch) {
    dispatch({
      type: REPLAY,
      payload: {stage: stage, level: level, test: lastTest},
    });
  };
}

export function stop(
  stage: number,
  level: number,
  test: number,
  stopReplay: boolean,
) {
  return function(dispatch) {
    if (stopReplay) {
      dispatch({
        type: STOP_REPLAY,
        payload: {stage: stage, level: level, test: test},
      });
    } else {
      dispatch({type: STOP, payload: {stage: stage, level: level, test: test}});
    }
  };
}
export function replayQuestionCompleted() {
  return function(dispatch) {
    dispatch({type: COMPLETED_A_REPLAY_QUESTION});
  };
}
export function questionCompleted(nextQuestion) {
  return function(dispatch) {
    dispatch({type: COMPLETED_A_QUESTION, payload: nextQuestion});
  };
}

export function testCompleted() {
  return function(dispatch) {
    dispatch({type: COMPLETED_A_TEST});
  };
}

export function levelCompleted() {
  return function(dispatch) {
    dispatch({type: COMPLETED_A_LEVEL});
  };
}

export function stageCompleted() {
  return function(dispatch) {
    dispatch({type: COMPLETED_A_STAGE});
  };
}
