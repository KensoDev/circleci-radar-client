import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store'
import routes from './routes'

const initialState = {}
const store = configureStore(initialState)

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </Provider>,
  rootElement,
)

registerServiceWorker()
