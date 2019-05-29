import {
  HOME_CLOSE_BOTTOM_BAR,
} from '../../../../src/features/home/redux/constants';

import {
  closeBottomBar,
  reducer,
} from '../../../../src/features/home/redux/closeBottomBar';

describe('home/redux/closeBottomBar', () => {
  it('returns correct action by closeBottomBar', () => {
    expect(closeBottomBar()).toHaveProperty('type', HOME_CLOSE_BOTTOM_BAR);
  });

  it('handles action type HOME_CLOSE_BOTTOM_BAR correctly', () => {
    const prevState = {displayBottomBar: true};
    const state = reducer(
      prevState,
      { type: HOME_CLOSE_BOTTOM_BAR }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {displayBottomBar: false};
    expect(state).toEqual(expectedState);
  });
});
