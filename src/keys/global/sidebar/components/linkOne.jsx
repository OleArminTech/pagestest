import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class LinkOne extends Component {

  render(){
    return (
      <div>
        Page one
        <br /><br />
        <NavLink to="/" >Back</NavLink>
      </div>
    )
  }
}

export default LinkOne
