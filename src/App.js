import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Pricing from './components/Pricing'
import Dashboard from './components/Dashboard.js'
import UserInfo from './components/UserInfo.js'
import NoMatch from './components/NoMatch'


/*
Part 2
<Switch>
  <Route exact path="/dashboard" component={ (routerProps)=> <Dashboard appState={this.state}/>}  />

  <Route exact path="/user/:uname" component={ UserInfo } />
  <Route exact path="/pricing" component={ Pricing } />
  <Route exact path="/" component={ Landing } />
  <Route component={ NoMatch } />
</Switch>
*/

class App extends Component {
  state = {
    userLoggedIn :  true
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        Under Construction
      </div>
    )
  }
}


export default App;
