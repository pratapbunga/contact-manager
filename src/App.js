import React, { Component } from 'react';
import Contacts from './components/contacts';
import AddContact from './components/AddContact';
import About from './components/About';
import NotFound from './components/layout/NotFound'
import Test from './components/Test'


import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import { Provider } from './context'

class App extends Component {
  render() {
    return (
      <Provider>
        <Router >
          <div className="App">
            <div className="container">
              <Switch>
                <Route exact path='/' component={Contacts} />
                  <Route exact path='/test' component={Test} />

              <Route exact path='/about' component={About} />
                <Route exact path='/contact/add' component={AddContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
