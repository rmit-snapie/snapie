import {SAVE_NAVIGATION} from '../types';

const initialState = {
  navigation: null,
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_NAVIGATION:
      return {...state, navigation: action.payload};
    default:
      return state;
  }
};

export default navigationReducer;
