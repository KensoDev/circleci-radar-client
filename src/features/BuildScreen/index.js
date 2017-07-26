import React from 'react'
import { connect } from 'react-redux'
import { rebuildAll, rebuild, fetchBuildStatus } from './Actions'
import BuildScreen from './presenter'

function mapStateToProps(state) {
  const { builds } = state

  return {
    builds,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    load: branchName => {
      dispatch(fetchBuildStatus(branchName))
    },
    rebuild: (name, buildNum, branchName) => {
      dispatch(rebuild(name, buildNum, branchName))
    },
    rebuildAll: (branchName) => {
      dispatch(rebuildAll(branchName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildScreen)
