import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class LinkThree extends Component {

  render(){
    return (
      <div>
        Page three
        <br /><br />
        <NavLink to='/pagetwo' >Back</NavLink>
      </div>
    )
  }
}

export default LinkThree
