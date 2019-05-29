import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

export default class MapComponent extends Component {
  state = {
    viewport: {
      latitude: 60.59,
      longitude: 25.13,
      zoom: 10,
    },
  };
  onViewportChange = viewport => {
    const { height, ...etc } = viewport;
    this.setState({ viewport: etc });
  };

  render() {
    return (
      <ReactMapGL
        width="100%"
        height={900}
        mapboxApiAccessToken="pk.eyJ1Ijoia2hhbmgtbmd1eWVuIiwiYSI6ImNqdzh2MjhjcDBhMWI0YW14cDYyaXQ5cnEifQ.uih5m0Vt-aPZHXlRCT7K8A"
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {this.props.children}
      </ReactMapGL>
    );
  }
}
