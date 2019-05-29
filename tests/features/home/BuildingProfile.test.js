import React from 'react';
import { shallow } from 'enzyme';
import { BuildingProfile } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<BuildingProfile />);
  expect(renderedComponent.find('.home-building-profile').length).toBe(1);
});
