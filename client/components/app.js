import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createHashHistory } from 'history';
import Dashboard from './dash-board';

import Header from './header';

import Home from './home';

import Login from './login';
import SignUp from './signup';
import requireAuth from './require-auth';

export const history = createHashHistory();

function App() {
  return (
    <div>
      <Router history={history}>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={requireAuth(Dashboard)} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
