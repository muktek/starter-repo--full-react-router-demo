import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import analyticsImg1 from '../images/analytics-1.png'
import analyticsImg2 from '../images/analytics-2.png'
import analyticsImg3 from '../images/analytics-3.png'

import Header from './Header.js'

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Header view="landing"/>
        <div className="pricing-section">

          {/* - [f.1]
            <Link className="btn btn-pricing" to="/pricing">
              Check Out Pricing
            </Link>
          */}
        </div>
        <div className="analytics">
          <img src={analyticsImg1}/>
          <img src={analyticsImg2}/>
          <img src={analyticsImg3}/>
        </div>
      </div>
    )
  }
}

export default Landing
