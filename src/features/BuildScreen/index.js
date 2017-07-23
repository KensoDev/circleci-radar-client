import React from 'react';
import { connect } from 'react-redux';
import { fetchBuildStatus } from './Actions';
import BuildScreen from './presenter';

function mapStateToProps(state) {
  const { builds } = state;

  return {
    builds,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    load: (branchName) => {
      dispatch(fetchBuildStatus(branchName))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildScreen);
