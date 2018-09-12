import React, { Component } from 'react';

class Header extends Component {
  render() {
    let text = ''
    console.log(this.props.view);
    switch (this.props.view){
      case "landing":
        text = 'All-in-one Analytics & Feedback'
        break;
      case "pricing":
        text = 'Find the Right Pricing for Your Needs'
        break;
    }

    return (
      <div className={`header header--${this.props.view}`}>
        <h1>{text}</h1>
      </div>
    )
  }
}

export default Header
