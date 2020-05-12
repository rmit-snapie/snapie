import {SAVE_NAVIGATION} from '../types';
// save current navigation stack to redux
export const saveNavigationStack = navigationStack => {
  return function(dispatch) {
    dispatch({type: SAVE_NAVIGATION, payload: navigationStack});
  };
};
