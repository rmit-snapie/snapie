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
import {setLocalQuestions} from './QuestionsContentActions';
import {
  incrementLevelCounter,
  incrementQuestionCounter,
  incrementStageCounter,
  incrementTestCounter,
} from './ProgressCounterActions';

export function play(stage: number, level: number, test: number) {
  return function(dispatch) {
    dispatch(
      setLocalQuestions({
        stage: stage,
        level: level,
        test: test,
      }),
    );
    dispatch({type: PLAY});
  };
}

export function replay(stage: number, level: number) {
  const lastTest = getNumberOfTests(stage, level);
  return function(dispatch) {
    dispatch(
      setLocalQuestions({
        stage: stage,
        level: level,
        test: lastTest,
      }),
    );
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

export function questionCompleted(stage, level, test, question, doneReplay) {
  return function(dispatch) {
    if (doneReplay) {
      if (question === getNumberOfQuestions(stage, level, test)) {
        dispatch(stop());
      } else {
        dispatch({type: COMPLETED_A_REPLAY_QUESTION});
      }
    } else {
      dispatch(incrementQuestionCounter());
      if (question === getNumberOfQuestions(stage, level, test)) {
        if (
          level === getNumberOfLevels(stage) &&
          test === getNumberOfTests(stage, level)
        ) {
          console.log('stage completed', stage, level, test);
          dispatch(stageCompleted());
          dispatch(incrementTestCounter());
          dispatch(incrementLevelCounter());
          dispatch(incrementStageCounter());
          dispatch(
            setLocalQuestions({
              stage: stage + 1,
              level: 0,
              test: 0,
            }),
          );
        } else if (test === 2) {
          console.log('level completed', stage, level, test);
          dispatch(levelCompleted());
          dispatch(incrementTestCounter());
          dispatch(incrementLevelCounter());
          dispatch(
            setLocalQuestions({
              stage: stage,
              level: level + 1,
              test: 0,
            }),
          );
        } else if (test < 2) {
          console.log('test completed', stage, level, test);
          dispatch(testCompleted());
          dispatch(incrementTestCounter());
          dispatch(
            setLocalQuestions({
              stage: stage,
              level: level,
              test: test + 1,
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
