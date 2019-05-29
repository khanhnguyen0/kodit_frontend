import React from 'react';
import { shallow } from 'enzyme';
import { ApartmentProfile } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ApartmentProfile />);
  expect(renderedComponent.find('.home-apartment-profile').length).toBe(1);
});
