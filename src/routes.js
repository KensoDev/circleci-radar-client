import React from 'react';
import { Route, IndexRoute } from 'react-router';

import BuildScreen from './features/BuildScreen';

export default (
  <div>
    <Route path="/" component={BuildScreen}>
    </Route>
  </div>
);
