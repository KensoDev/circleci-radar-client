import React from 'react'
import { connect } from 'react-redux'
import EnvVars from './presenter'
import { updateEnvVars, loadEnvVars } from './Actions'

function mapStateToProps(state) {
  const { loading, vars } = state.envVars

  return {
    loading,
    vars,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadEnvVars: envVarName => {
      dispatch(loadEnvVars(envVarName))
    },
    updateEnvVars: (envVarName, envVarValue) => {
      dispatch(updateEnvVars(envVarName, envVarValue))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnvVars)
