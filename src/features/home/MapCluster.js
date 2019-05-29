import React, { Component } from 'react';
import { Marker } from 'react-map-gl';
import MarkerIcon from '@material-ui/icons/LocationOn'

export default class MapCluster extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        {this.props.clusters.map(marker => (
          <Marker
            key={marker['Unnamed: 0']}
            longitude={marker.longitude}
            latitude={ marker.latitude}
            onclick={()=>{console.log("clicked")}}
          >
          <div onClick={()=>{console.log("clicked")}}>
          <MarkerIcon />
          </div>
          </Marker>
        ))}
      </div>
    );
  }
}
