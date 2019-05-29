import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

export default class ApartmentProfile extends Component {
  static propTypes = {};

  render() {
    const { living_area_sqm, price_sqm } = this.props;
    const price = Math.round((living_area_sqm * price_sqm) / 1000) * 1000;
    return (
      <div className="home-apartment-profile">
        <Typography variant="h6" gutterBottom className="price_sqm">
          {`${living_area_sqm} m²`}
        </Typography>
        <Typography variant="h5" gutterBottom className="price">
          {`${price} €`}
        </Typography>
        <Typography variant="subtitle2" gutterBottom className="living_area_sqm">
          {`${price_sqm} €/m²`}
        </Typography>
      </div>
    );
  }
}
