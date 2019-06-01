import {
  HOME_SELECT_DISPLAY_DATA,
} from '../../../../src/features/home/redux/constants';

import {
  selectDisplayData,
  reducer,
} from '../../../../src/features/home/redux/selectDisplayData';

describe('home/redux/selectDisplayData', () => {
  it('returns correct action by selectDisplayData', () => {
    expect(selectDisplayData()).toHaveProperty('type', HOME_SELECT_DISPLAY_DATA);
  });

  it('handles action type HOME_SELECT_DISPLAY_DATA correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_SELECT_DISPLAY_DATA }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
