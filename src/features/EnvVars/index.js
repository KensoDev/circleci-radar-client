import React from 'react';
import { connect } from 'react-redux';
import EnvVars from './presenter';
import { loadEnvVars } from './Actions';


function mapStateToProps(state) {
  const { loading, vars } = state.envVars;

  return {
    loading,
    vars,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadEnvVars: (envVarName) => {
      dispatch(loadEnvVars(envVarName))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EnvVars);

