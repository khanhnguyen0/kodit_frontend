import React, { Component } from 'react';
import Popover from '@material-ui/core/Popover';

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
        <div>Building profile</div>
      </Popover>
    );
  }
}
