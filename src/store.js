import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerMiddleware, routerReducer as routing, push } from 'react-router-redux';
import thunk from 'redux-thunk';
import builds from './features/BuildScreen/Reducer';

const actionCreators = {
  push
};

const reducers = {
  routing,
  builds,
};

const middlewares = [ thunk ];

const composeEnhancers = (() => {
  const compose_ = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  if(process.env.NODE_ENV === 'development' && compose_) {
    return compose_({ actionCreators });
  }
  return compose;
})();

export default function configureStore(initialState) {
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const rootReducer = combineReducers(reducers);

  return createStore(rootReducer, initialState, enhancer);
}
