import {SET_CURRENT_STACK, POP_CURRENT_STACK} from '../types';

export function setCurrentStack(currentStack) {
  return function(dispatch) {
    dispatch({type: SET_CURRENT_STACK, payload: currentStack});
  };
}

export function popCurrentStack(stack) {
  return function(dispatch) {
    dispatch({type: POP_CURRENT_STACK, payload: stack});
  };
}
