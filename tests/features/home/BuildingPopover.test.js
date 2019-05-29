import React from 'react';
import { shallow } from 'enzyme';
import { BuildingPopover } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<BuildingPopover />);
  expect(renderedComponent.find('.home-building-popover').length).toBe(1);
});
