import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MapComponent from './MapComponent';
import * as actions from './redux/actions';
import SideBar from './SideBar';
import ClusterSelect from './ClusterSelect';
import MapCluster from './MapCluster';
import BottomBar from './BottomBar';
import PriceHistogram from './PriceHistogram';
import NavigationIcon from '@material-ui/icons/Navigation';
import IconButton from '@material-ui/core/IconButton';
import DataSourceSelect from './DataSourceSelect';

export class DefaultPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  state={
    displayData:"price"
  }

  componentDidMount() {
    this.props.actions.getClusterId();
  }

  render() {
    const { clusterIds, clusters, displayBottomBar, displayData } = this.props.home;
    const { closeBottomBar, selectDisplayData } = this.props.actions;
    return (
      <div className="home-default-page">
        <div>
          <SideBar>
            {clusterIds && (
              <ClusterSelect
                clusterIds={clusterIds}
                fetchCluster={this.props.actions.fetchCluster}
              />
            )}
          </SideBar>
          {clusters && (
            <BottomBar open={displayBottomBar}>
              <IconButton
                aria-label="Minimize"
                size="medium"
                className="rotate-180"
                onClick={closeBottomBar}
              >
                <NavigationIcon fontSize="inherit" />
              </IconButton>
              <DataSourceSelect displayData={displayData} selectDisplayData={selectDisplayData}/>
              <PriceHistogram clusters={clusters} displayData={displayData}/>
            </BottomBar>
          )}
          <MapComponent>{clusters && <MapCluster clusters={clusters} />}</MapComponent>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DefaultPage);
