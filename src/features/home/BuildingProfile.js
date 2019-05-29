import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

const mergeArray = (living_area_sqm,price_sqm)=>{
  let mergedArray = []
  for (let i=0;i<living_area_sqm.length;i++){
    mergedArray.push({
      living_area_sqm:living_area_sqm[i],
      price_sqm: price_sqm[i]
    })
  }
  return mergedArray
}

export default class BuildingProfile extends Component {
  static propTypes = {

  };

  render() {
    const {cluster, living_area_sqm, price_sqm, price} = this.props
    return (
      <div className="home-building-profile">
        Component content: home/BuildingProfile
      </div>
    );
  }
}
