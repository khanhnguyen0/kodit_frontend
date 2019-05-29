import React, { Component } from 'react';
import { Marker } from 'react-map-gl';
import MarkerIcon from '@material-ui/icons/LocationOn';
import BuildingPopover from './BuildingPopover';

export default class MapCluster extends Component {
  static propTypes = {};
  state = {
    anchorEl:null
  }

  openPopover(event){
    this.setState({
      anchorEl:event.currentTarget
    })
  }

  closePopover(){
    this.setState({anchorEl:null})
  }

  render() {
    const {anchorEl} = this.state
    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : null;
    return (
      <div>
        {this.props.clusters.map(marker => (
          <Marker
            key={marker['Unnamed: 0']}
            longitude={marker.longitude}
            latitude={ marker.latitude}
            onclick={()=>{console.log("clicked")}}
          >
          <div onClick={this.openPopover.bind(this)}>
          <MarkerIcon />
          </div>
          </Marker>
        ))}
        <BuildingPopover open={open} id={id} anchorEl={anchorEl} handleClose={this.closePopover.bind(this)}/>
      </div>
    );
  }
}
