// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_SELECT_DISPLAY_DATA,
} from './constants';

export function selectDisplayData(displayData) {
  return {
    type: HOME_SELECT_DISPLAY_DATA,
    displayData
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_SELECT_DISPLAY_DATA:
      return {
        ...state,
        displayData:action.displayData
      };

    default:
      return state;
  }
}
