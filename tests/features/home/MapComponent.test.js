import React from 'react';
import { shallow } from 'enzyme';
import { MapComponent } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<MapComponent />);
  expect(renderedComponent.find('.home-map-component').length).toBe(1);
});
