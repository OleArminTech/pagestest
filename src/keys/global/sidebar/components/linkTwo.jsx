import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class LinkTwo extends Component {

  click = () => {
    this.props.history.push('/pagethree')
  }

  render(){
    return (
      <div>
        Page two
        <br /><br />
        <button onClick={this.click}>Page 3</button>
        <br />
        <NavLink to='/' >Back</NavLink>
      </div>
    )
  }
}

export default LinkTwo
