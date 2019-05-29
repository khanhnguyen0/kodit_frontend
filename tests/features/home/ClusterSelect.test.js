import React from 'react';
import { shallow } from 'enzyme';
import { ClusterSelect } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ClusterSelect />);
  expect(renderedComponent.find('.home-cluster-select').length).toBe(1);
});
