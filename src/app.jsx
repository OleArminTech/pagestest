import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Sidebar from './keys/global/sidebar/sidebar'
import LinkOne from './keys/global/sidebar/components/linkOne'
import LinkTwo from './keys/global/sidebar/components/linkTwo'

class App extends Component {

  render(){
    return (
      <div>
        Derp
        <br /><br />
        <Switch>
          <Route path="/pageone" component={LinkOne} />
          <Route path="/pagetwo" component={LinkTwo} />
          <Route component={Sidebar} />
        </Switch>
      </div>
    )
  }
}

export default App
