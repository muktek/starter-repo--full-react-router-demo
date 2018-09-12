import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Header from './Header.js'

class Pricing extends Component {
  render() {
    return (
      <div className="pricing-view">

        <Header view="pricing"/>

        <div className="faq">
          <h2>Frequently Asked Questions</h2>
          <p>» What payment methods do you support?</p>
          <p>» What is the billing cycle?</p>
          <p>» What do I receive reports?</p>
          <p>» I am a nonprofit. Are there discounts?</p>
          <p>» Are there yearly price plans?</p>
          <p>» What happens if I exceed the limits of my account?</p>
        </div>

      </div>
    )
  }
}

export default Pricing
