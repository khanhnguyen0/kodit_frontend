import React from 'react';
import { shallow } from 'enzyme';
import { PriceHistogram } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const clusters = [
    {
      'Unnamed: 0': 14,
      cluster: 1,
      latitude: 60.58793775,
      living_area_sqm: [46.5],
      longitude: 25.1124735394,
      price: [172143],
      price_sqm: [3702],
    },
    {
      'Unnamed: 0': 15,
      cluster: 1,
      latitude: 60.59876225,
      living_area_sqm: [51.5, 51.5],
      longitude: 25.112513007,
      price: [200850, 293344],
      price_sqm: [3900, 5696],
    },
  ];
  const renderedComponent = shallow(<PriceHistogram clusters={clusters} />);
  expect(renderedComponent.find('.home-price-histogram').length).toBe(1);
});
