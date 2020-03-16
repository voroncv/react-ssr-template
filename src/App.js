import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import ScrollToTop from './helpers/scrollToTop'
import GlobalStyles from './assets/styles/global'

import routes from './routes'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <GlobalStyles />
        <ScrollToTop />
        <Switch>
          {routes.map((route) => <Route key={route.path} { ...route } />)}
        </Switch>
      </Fragment>
    )
  }
}

export default App
