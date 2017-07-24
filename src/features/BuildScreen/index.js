import React from 'react';
import { connect } from 'react-redux';
import { rebuild, fetchBuildStatus } from './Actions';
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
    },
    rebuild: (name, buildNum) => {
      dispatch(rebuild(name, buildNum))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildScreen);
