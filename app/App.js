import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles/main.sass';

import { userActions } from './actions';
import { history } from './helpers';
import { Navbar, Footer } from './components';
import { views } from './views';

@connect(
  state => ({
      user: state.user
  }),
  dispatch => ({
      actions: bindActionCreators(userActions, dispatch)
  })
)
class App extends Component {

  componentDidMount(){
    this.props.actions.fetchUserData();
  }

  render(){
      return(
        <Router history={history}>
          <div className="view">
            {/*
             Navbar is required userEmail for success rendering this component,
             but this component not rendering if not authenticated.
            */}
            <Navbar userEmail={this.props.user.data ? this.props.user.data[0].email : ""}/>
            <Switch>
              <Route exact path="/popup.html" component={views.TraceList} />
              <Route path="/login" component={views.Login} />
             <Route path="/trace/add" component={views.AddTrace} />
            </Switch>
            <Footer />
          </div>
        </Router>
      );
  }
}

export default App;