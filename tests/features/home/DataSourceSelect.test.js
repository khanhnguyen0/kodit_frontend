import React from 'react';
import { shallow } from 'enzyme';
import { DataSourceSelect } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<DataSourceSelect />);
  expect(renderedComponent.find('.home-data-source-select').length).toBe(1);
});
