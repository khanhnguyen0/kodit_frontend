import React, { Component } from 'react';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';


export default class BuildingPopover extends Component {
  static propTypes = {};

  render() {
    const { id, open, anchorEl, handleClose } = this.props;
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
        <Paper>Building profile</Paper>
      </Popover>
    );
  }
}
