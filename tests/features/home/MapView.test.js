import React from 'react';
import { shallow } from 'enzyme';
import { MapView } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<MapView />);
  expect(renderedComponent.find('.home-map-view').length).toBe(1);
});
