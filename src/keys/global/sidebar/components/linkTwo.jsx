import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class LinkTwo extends Component {

  render(){
    return (
      <div>
        Page two
        <br /><br />
        <NavLink to='/' >Back</NavLink>
      </div>
    )
  }
}

export default LinkTwo
