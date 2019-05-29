import React, { Component } from 'react';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';
import BuildingProfile from './BuildingProfile';

export default class BuildingPopover extends Component {
  static propTypes = {};

  render() {
    const { id, open, anchorEl, handleClose, selectedApartment } = this.props;
    return (
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <BuildingProfile {...selectedApartment} />
      </Popover>
    );
  }
}
