import React from 'react';

import Login from '../containers/Login';
import Items from '../containers/Items';
import Profile from '../containers/Profile';
import Share from '../containers/Share';
import NotFound from '../containers/NotFound';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const Routes = () => (
  <Router>
    <Switch>      
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Items} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/share" component={Share} />
      <Route component={NotFound} />
    </Switch>    
  </Router>
);

export default Routes;