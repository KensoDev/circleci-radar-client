import React from 'react';
import { Route, IndexRoute } from 'react-router';

import BuildScreen from './features/BuildScreen';
import EnvVars from './features/EnvVars';

export default (
  <div>
    <Route path="/env"
      component={EnvVars}>
    </Route>
    <Route path="/"
      exact={true}
      component={BuildScreen}>
    </Route>
  </div>
);
