import React, { Component } from 'react';
// [g.1]
/* import {NavLink} from 'react-router-dom'*/

class Navbar extends Component {
  render() {
    return (
      <nav className="nav">

      </nav>
    )
    /* [g.2] instantiate NavLink components
     <NavLink className="nav__option" activeClassName="nav__option--selected" exact to="/">Home</NavLink>
     <NavLink className="nav__option" activeClassName="nav__option--selected" to="/pricing">Pricing</NavLink>
     <NavLink className="nav__option" activeClassName="nav__option--selected" to="/dashboard">Dashboard</NavLink>
    */
  }
}

export default Navbar
