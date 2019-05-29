import React from 'react';
import { shallow } from 'enzyme';
import { ClusterSelect } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ClusterSelect clusterIds={[0,1,2]}/>);
  expect(renderedComponent.find('.cluster-select-form-control').length).toBe(1);
});
