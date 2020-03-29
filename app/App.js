import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import globalStyle from './App.css';

import { LoginView, TraceListView } from './views';
import { NavbarComponent } from './components';

export default class App extends Component {
  render(){
    return(
      <Router>
        <div className={globalStyle.view}>
          <NavbarComponent />
          <Switch>
            <Route exact path="/popup.html">
              <TraceListView/>
            </Route>
            <Route path="/login">
              <LoginView/>
            </Route>
            <Route path="/test">
              <h1>awdawd</h1>
            </Route>
          </Switch>

          <footer className={globalStyle.footer}>
            <p className={globalStyle.footer__text}>Ⓒ 2020 SpendlyTime</p>
          </footer>
        </div>
      </Router>
    );
  }
}
