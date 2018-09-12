import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App--complete';
import registerServiceWorker from './registerServiceWorker';
/*[c.1]*/

import {BrowserRouter} from 'react-router-dom'

/*[c.2]*/
class AppRouter extends React.Component {
  render() {
    return (

      <BrowserRouter >
        <App/>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<AppRouter/>, document.getElementById('root'));
registerServiceWorker();
