import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class Sidebar extends Component {

  render(){
    return (
      <div>
        <div>
          <NavLink to='/pageone' >Page 1</NavLink>
          <br /><br />
          <NavLink to='/pagetwo' >Page 2</NavLink>
        </div>
      </div>
    )
  }
}

export default Sidebar
