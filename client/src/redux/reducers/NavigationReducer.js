import {SAVE_NAVIGATION} from '../types';

const initialState = {};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_NAVIGATION:
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default navigationReducer;
