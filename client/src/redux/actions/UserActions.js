// Login
import {LOG_IN, LOGGING_IN} from '../ActionTypes';
/**
 * function to login and dispatch the action to user reducer
 * ? a temporary function that receive a state and dispatch to user reducer
 * @param: state: boolean
 */

export function login(state) {
  // todo: call login API if required, hence this function can be async
  return function(dispatch) {
    dispatch({type: LOG_IN, payload: state});
    dispatch({type: LOGGING_IN});
  };
}
