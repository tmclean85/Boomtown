import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';

import {
  BrowserRouter as Router,
  Route,

} from 'react-router-dom';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Login from './containers/Login';
import Items from './containers/Items';
import NotFound from './containers/NotFound';
import Profile from './containers/Profile';
import Share from './containers/Share';
import CardExampleWithAvatar from './components/ItemCard';
import Routes from './routes';

injectTapEventPlugin();

const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router>
          <Layout>
            <Routes />
          </Layout>  
      </Router>            
    </MuiThemeProvider>

);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
