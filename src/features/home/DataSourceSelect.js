import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { DATA_SOURCE } from './redux/constants';
export default class DataSourceSelect extends Component {
  static propTypes = {};

  render() {
    const { dataSource, selectDisplayData } = this.props;
    const options = DATA_SOURCE.map(({ label, value }) => <option value={value} key={value}>{label}</option>);
    return (
      <FormControl className="home-data-source-select">
        <InputLabel htmlFor="age-native-simple">Select data point</InputLabel>
        <Select
          native
          value={dataSource}
          onChange={(e)=>selectDisplayData(e.target.value)}
          inputProps={{
            name: 'data-source',
            id: 'data-source-select',
          }}
        >
          {options}
        </Select>
      </FormControl>
    );
  }
}
