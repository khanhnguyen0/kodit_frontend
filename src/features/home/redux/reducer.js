import initialState from './initialState';
import { reducer as getClusterIdReducer } from './getClusterId';
import { reducer as fetchClusterReducer } from './fetchCluster';
import { reducer as openBottomBarReducer } from './openBottomBar';
import { reducer as closeBottomBarReducer } from './closeBottomBar';
import { reducer as selectDisplayDataReducer } from './selectDisplayData';

const reducers = [
  getClusterIdReducer,
  fetchClusterReducer,
  openBottomBarReducer,
  closeBottomBarReducer,
  selectDisplayDataReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
