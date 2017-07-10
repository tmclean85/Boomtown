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
  Link,
  Redirect,
  NavLink
} from 'react-router-dom';

const NavBar = () => (
  <div>
    <NavLink exact to="/" activeClassName="selectedNav">Home</NavLink>
    <NavLink to="/login" activeClassName="selectedNav">Login</NavLink>   
    <NavLink to="/items" activeClassName="selectedNav">Items</NavLink>
    <NavLink to="/share" activeClassName="selectedNav">Share</NavLink>
    <NavLink to="/profile" activeClassName="selectedNav">Profile</NavLink>
  </div>  
);

const Routes = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>      
        <Route path="/login" component={Login} />
        <Route path="/items" component={Items} />
        <Route path="/profile" component={Profile} />
        <Route path="/share" component={Share} />
        <Route component={NotFound} />
      </Switch>    
    </div>
  </Router>
);

export default Routes;