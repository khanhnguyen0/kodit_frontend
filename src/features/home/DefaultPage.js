import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MapComponent from './MapComponent';
import * as actions from './redux/actions';
import SideBar from './SideBar';
import ClusterSelect from './ClusterSelect';
import MapCluster from './MapCluster';

export class DefaultPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  componentDidMount() {
    this.props.actions.getClusterId();
  }

  render() {
    const { clusterIds, clusters } = this.props.home;
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
