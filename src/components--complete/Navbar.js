import React, { Component } from 'react';
/* [g.1] import NavLink */
import {NavLink} from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
       {/* [g.2] instantiate compoonents */}

        <NavLink exact className="nav__option" activeClassName="nav__option--selected" to="/">Home</NavLink>
        <NavLink className="nav__option" activeClassName="nav__option--selected" to="/pricing">Pricing</NavLink>
        <NavLink className="nav__option" activeClassName="nav__option--selected" to="/dashboard">Dashboard</NavLink>
      </nav>
    )
  }
}

export default Navbar
