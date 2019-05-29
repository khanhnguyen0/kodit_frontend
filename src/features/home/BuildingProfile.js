import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import ApartmentProfile from './ApartmentProfile';
import Slider from 'react-slick';
import uniqid from 'uniqid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;

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
    const settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    };
    const { cluster, living_area_sqm, price_sqm, price } = this.props;
    return (
      <div className="home-building-profile">
       {price_sqm && price_sqm.length>1 && (
          <Typography variant="h6" gutterBottom>
            {`${Math.round(average(price_sqm))} €/m² average`}
          </Typography>
        )}
        {living_area_sqm && (
          <Typography variant="caption" display="block" gutterBottom>
            {`${living_area_sqm.length} ${
              living_area_sqm.length > 1 ? 'apartments' : 'apartment'
            } available:`}
          </Typography>
        )}
        <Divider />
        <Slider {...settings}>
          {living_area_sqm &&
            mergeArray(living_area_sqm, price_sqm).map(apartment => (
              <ApartmentProfile {...apartment} key={uniqid()} />
            ))}
        </Slider>
      </div>
    );
  }
}
