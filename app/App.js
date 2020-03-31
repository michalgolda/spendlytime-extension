import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import globalStyle from './App.css';

import { Navbar } from './components';
import { views } from './views';

export default class App extends Component {
  render(){
    return(
      <Router>
        <div className={globalStyle.view}>
          <Navbar />
          <Switch>
            <Route exact path="/popup.html" component={views.TraceList} />
            <Route path="/login" component={views.Login} />
            <Route path="/trace/add" component={views.AddTrace} />
          </Switch>

          <footer className={globalStyle.footer}>
            <p className={globalStyle.footer__text}>Ⓒ 2020 SpendlyTime</p>
          </footer>
        </div>
      </Router>
    );
  }
}
