import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class NoMatch extends Component {
  render() {
    return (
      <div className="page404">
        <h2> <span className="lost">404</span> (you are now lost)</h2>
        <Link className="btn-404-home" to="/">Go Home</Link>
      </div>
    )
  }
}

export default NoMatch
