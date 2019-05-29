import {
  HOME_OPEN_BOTTOM_BAR,
} from '../../../../src/features/home/redux/constants';

import {
  openBottomBar,
  reducer,
} from '../../../../src/features/home/redux/openBottomBar';

describe('home/redux/openBottomBar', () => {
  it('returns correct action by openBottomBar', () => {
    expect(openBottomBar()).toHaveProperty('type', HOME_OPEN_BOTTOM_BAR);
  });

  it('handles action type HOME_OPEN_BOTTOM_BAR correctly', () => {
    const prevState = {displayBottomBar: false};
    const state = reducer(
      prevState,
      { type: HOME_OPEN_BOTTOM_BAR }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {displayBottomBar: true};
    expect(state).toEqual(expectedState);
  });
});
