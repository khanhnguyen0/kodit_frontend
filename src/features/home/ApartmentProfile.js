import React, { Component } from 'react';

export default class ApartmentProfile extends Component {
  static propTypes = {

  };

  render() {
    const { living_area_sqm, price_sqm} = this.props
    return (
      <div className="home-apartment-profile">
        <span>{living_area_sqm}</span>
         <span>{price_sqm}</span>
      </div>
    );
  }
}
