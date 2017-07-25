import React from 'react'
import { connect } from 'react-redux'
import Navbar from './presenter'
import { withRouter } from 'react-router'

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))
