import React, { Component } from 'react';


class UserInfo extends Component {
  render() {
    /* [e.2] capture value for :uname on this.props.match.params.uname */
    const userInRoute = this.props.match.params.uname
    return (
      <div className="userinfo">
        <h3>Showing Information for: <mark> {userInRoute}</mark> </h3>
        <img src={`https://flathash.com/${userInRoute}`}/>

      </div>
    )
  }
}

export default UserInfo
