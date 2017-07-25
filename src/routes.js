import React from 'react'
import { Route, IndexRoute } from 'react-router'

import BuildScreen from './features/BuildScreen'
import EnvVars from './features/EnvVars'
import App from './App'

export default (
  <App>
    <Route path="/env" component={EnvVars} />
    <Route path="/" exact={true} component={BuildScreen} />
  </App>
)
