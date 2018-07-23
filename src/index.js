// React, React-Router and Redux imports
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Non-package imports
import App from './app'


render(
  <Router>
    <Switch>
      <Route component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
