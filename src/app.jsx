import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Sidebar from './keys/global/sidebar/sidebar'
import LinkOne from './keys/global/sidebar/components/linkOne'
import LinkTwo from './keys/global/sidebar/components/linkTwo'

import LinkThree from './keys/global/sidebar/components/linkThree'

class App extends Component {

  render(){
    return (
      <div>
        <Switch>
          <Route path='/pageone' component={LinkOne} />
          <Route path='/pagetwo' component={LinkTwo} />
          <Route path='/pagethree' component={LinkThree} />
          <Route component={Sidebar} />
        </Switch>
      </div>
    )
  }
}

export default App
