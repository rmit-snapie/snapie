import {UPDATE_RECENT} from '../types';

export const updateRecent = recentArr => ({
    type: UPDATE_RECENT,
    recentArr,
  });
  
  const initialState = {
    recentArr: [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_RECENT:
        return {
          ...state,
          recentArr: action.recentArr,
        };
      default:
        return state;
    }
  };