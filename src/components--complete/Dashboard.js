import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import settingsIcon from '../images/_ionicons_svg_md-cog.svg'
import logoutIcon from '../images/_ionicons_svg_md-log-out.svg'
import dashIcon from '../images/_ionicons_svg_md-log-out.svg'
import forbiddenIcon from '../images/_ionicons_svg_md-close-circle-outline.svg'


import Header from './Header.js'

class Dashboard extends Component {
  _renderDashboard(){
    return <div className="dashboard">
      <div>
        <img src={dashIcon}/>
        <h3>Metrics</h3>
      </div>
      <div>
        <img src={settingsIcon}/>
        <h3>Settings</h3>
      </div>
      <div>
        <img src={logoutIcon}/>
        <h3>Logout</h3>
      </div>


    </div>
  }

  _renderUnauthorized(){
    return <div className="dashboard dashboard--forbidden">
      <div>
        <img src={forbiddenIcon}/>
        <h3>Forbidden</h3>
      </div>
    </div>
  }

  render() {
    /*[h.3]*/
    if(this.props.appState.userLoggedIn){
      return this._renderDashboard()
    } else {
      return this._renderUnauthorized()
    }
  }
}

export default Dashboard
