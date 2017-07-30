import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Login from '../containers/Login';
import Items from '../containers/Items';
import Profile from '../containers/Profile';
import Share from '../containers/Share';
import NotFound from '../containers/NotFound';
import SignUp from '../containers/SignUp';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';


const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Items} />
      <PrivateRoute exact path="/profile/:id" component={Profile} />
      <PrivateRoute path="/share" component={Share} />
      <Route path="/signup" component={SignUp} />
      <Route component={NotFound} />
    </Switch>  
  </Router>
);

export default Routes;
