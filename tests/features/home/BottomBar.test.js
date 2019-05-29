import React from 'react';
import { shallow } from 'enzyme';
import { BottomBar } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<BottomBar />);
  expect(renderedComponent.find('.home-bottom-bar').length).toBe(1);
});
