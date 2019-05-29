import React from 'react';
import { shallow } from 'enzyme';
import { MapCluster } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<MapCluster />);
  expect(renderedComponent.find('.home-map-cluster').length).toBe(1);
});
