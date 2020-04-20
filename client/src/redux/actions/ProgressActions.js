import {COMPLETED_A_TEST} from '../types';

export function testCompleted(test) {
  return function(dispatch) {
    dispatch({type: COMPLETED_A_TEST, payload: test});
  };
}
