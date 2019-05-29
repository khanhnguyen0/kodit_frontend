import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';


export default class BottomBar extends Component {
  static propTypes = {};

  render() {
    const { open } = this.props;
    return (
      <div className="home-bottom-bar">
        <Drawer
          className="bottom-bar"
          variant="persistent"
          anchor="bottom"
          open={open}
          classes={{
            paper: 'bottom-bar-paper',
          }}
        >
          {this.props.children}
        </Drawer>
      </div>
    );
  }
}
