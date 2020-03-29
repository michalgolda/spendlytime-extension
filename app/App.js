import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MainView, LoginView } from './views';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginView}/>
          <Route path="/" component={MainView}/>
        </Switch>
      </Router>
    );
  }
}
