import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';

export default class SideBar extends Component {
  render() {
    return (
      <Drawer
        className="Sidebar"
        variant="permanent"
        classes={{
          paper: 'Sidebar-paper',
        }}
        anchor="right"
      >
        {this.props.children}
      </Drawer>
    );
  }
}
