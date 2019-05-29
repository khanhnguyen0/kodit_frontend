import React from 'react';
import { shallow } from 'enzyme';
import { PriceHistogram } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<PriceHistogram />);
  expect(renderedComponent.find('.home-price-histogram').length).toBe(1);
});
