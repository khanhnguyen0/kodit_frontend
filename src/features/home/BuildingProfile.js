import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import ApartmentProfile from './ApartmentProfile';

const mergeArray = (living_area_sqm, price_sqm) => {
  let mergedArray = [];
  for (let i = 0; i < living_area_sqm.length; i++) {
    mergedArray.push({
      living_area_sqm: living_area_sqm[i],
      price_sqm: price_sqm[i],
    });
  }
  return mergedArray;
};

export default class BuildingProfile extends Component {
  static propTypes = {};

  render() {
    const { cluster, living_area_sqm, price_sqm, price } = this.props;
    return (
      <Paper className="home-building-profile">
        {living_area_sqm &&
          mergeArray(living_area_sqm, price_sqm).map(apartment => (
            <ApartmentProfile {...apartment} />
          ))}
      </Paper>
    );
  }
}
