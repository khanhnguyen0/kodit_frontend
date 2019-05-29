// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_OPEN_BOTTOM_BAR,
} from './constants';

export function openBottomBar() {
  return {
    type: HOME_OPEN_BOTTOM_BAR,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_OPEN_BOTTOM_BAR:
      return {
        ...state,
        displayBottomBar: true
      };

    default:
      return state;
  }
}
