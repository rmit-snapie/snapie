import {
  COMPLETED_A_LEVEL,
  COMPLETED_A_QUESTION,
  COMPLETED_A_REPLAY_QUESTION,
  COMPLETED_A_STAGE,
  COMPLETED_A_TEST,
  PLAY,
  REPLAY,
  STOP,
} from '../types';
import {
  getNumberOfLevels,
  getNumberOfQuestions,
  getNumberOfTests,
} from '../../helpers/QuestionHelper';
import {setLocalQuestions, setOnlineQuestions} from './QuestionsContentActions';

export function play(stage: number, level: number, test: number) {
  return function(dispatch) {
    // // todo: check to remove dispatch here
    // dispatch({
    //   type: SET_PROGRESS,
    //   payload: {stage: stage, level: level, test: test, question: 0},
    // });
    dispatch({type: PLAY});
  };
}

export function replay(stage: number, level: number) {
  const lastTest = getNumberOfTests(stage, level);
  return function(dispatch) {
    // todo: change this to setTestQuestion....
    // dispatch(
    //   setLocalQuestions({
    //     stage: stage,
    //     level: level,
    //     test: lastTest,
    //   }),
    // );
    dispatch({
      type: REPLAY,
      payload: {stage: stage, level: level, test: lastTest},
    });
  };
}

export function stop() {
  return function(dispatch) {
    dispatch({type: STOP});
  };
}
export function completeRelayQuestion() {
  return function(dispatch) {
    dispatch({type: COMPLETED_A_REPLAY_QUESTION});
  };
}
export function completeAQuestion(nextQuestion) {
  return function(dispatch) {
    dispatch({type: COMPLETED_A_QUESTION, payload: nextQuestion});
  };
}
export function questionCompleted(stage, level, test, question, doneReplay) {
  return function(dispatch) {
    if (doneReplay) {
      if (question === getNumberOfQuestions(stage, level, test)) {
        dispatch(stop());
      } else {
        dispatch({type: COMPLETED_A_REPLAY_QUESTION});
      }
    } else {
      if (question === getNumberOfQuestions(stage, level, test)) {
        // todo: this is hardcoded...need double check...
        if (test < 2) {
          dispatch(testCompleted());
          // todo: change this to setTestQuestion....
          dispatch(
            setLocalQuestions({
              stage: stage,
              level: level,
              test: test + 1,
            }),
          );
        } else if (test === 2) {
          dispatch(levelCompleted());
          dispatch(
            setLocalQuestions({
              stage: stage,
              level: level + 1,
              test: 0,
            }),
          );
        } else if (level === getNumberOfLevels(stage, level)) {
          dispatch(stageCompleted());
          dispatch(
            setLocalQuestions({
              stage: stage,
              level: 0,
              test: 0,
            }),
          );
        }
      } else {
        dispatch({type: COMPLETED_A_QUESTION});
      }
    }
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
export function setProgress(
  stage: number,
  level: number,
  test: number,
  question: number,
) {
  return function(dispatch) {
    dispatch({
      type: SET_PROGRESS,
      payload: {stage: stage, level: level, test: test, question: question},
    });
  };
}
