import React, { Component } from 'react';
/*[d.1]*/
import { Switch, Route} from 'react-router-dom'

import Navbar from './components--complete/Navbar'
import Landing from './components--complete/Landing'
import Pricing from './components--complete/Pricing'
import Dashboard from './components--complete/Dashboard.js'
import UserInfo from './components--complete/UserInfo.js'
import NoMatch from './components--complete/NoMatch'

class App extends Component {
  /*[h.2]*/
  state = {
    userLoggedIn :  true
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        {/*[g.1]*/}
        <Navbar/>
        {/*[d.2]*/}
        <Switch>
          {/*[h.2]*/}
          <Route exact path="/dashboard" component={ (routerProps)=> <Dashboard appState={this.state}/>}  />

          {/*[e.1]*/}
          <Route exact path="/user/:uname" component={ UserInfo } />

          {/*[d.2]*/}
          <Route exact path="/pricing" component={ Pricing } />
          <Route exact path="/" component={ Landing } />
          {/*[d.3]*/}
          <Route component={ NoMatch } />
        </Switch>
      </div>
    )
  }
}


export default App;
