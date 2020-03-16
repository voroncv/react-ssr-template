import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'

import configureStore from './redux/configureStore'
const state = window.__REDUX_DATA__
delete window.__REDUX_DATA__

const store = configureStore(state)

import App from './App'

hydrate(
  <HelmetProvider context={{}}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </HelmetProvider>,
  document.getElementById('root')
)
