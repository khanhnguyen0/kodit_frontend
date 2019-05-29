import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const clusterName = id => {
  if (id == 0) {
    return 'Noise';
  }
  return id;
};

export default class ClusterSelect extends Component {
  state = {
    clusterId: '',
  };
  static propTypes = {};

  handleChange(event) {
    console.log(event.target.value)
    return;
  }

  render() {
    const options = this.props.clusterIds.map(id => <option value={id} key={id}>{clusterName(id)}</option>);
    const { state } = this;
    return (
      <FormControl className="cluster-select-form-control">
      <InputLabel htmlFor="age-native-simple">Postcodes</InputLabel>
      <Select
        native
        value={state.age}
        onChange={this.handleChange}
        inputProps={{
          name: 'age',
          id: 'age-native-simple',
        }}
      >
        {options}
      </Select>
      </FormControl>
    );
  }
}
