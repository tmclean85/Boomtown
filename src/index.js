import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {
  BrowserRouter as Router,
  Route,

} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import muiTheme from './config/theme';
import store from './redux/store';
import Layout from './components/Layout';
import Login from './containers/Login';
import Items from './containers/Items';
import NotFound from './containers/NotFound';
import Profile from './containers/Profile';
import Share from './containers/Share';
import ItemCard from './components/ItemCard';
import Routes from './routes';

injectTapEventPlugin();

const Boomtown = () => (

    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store} >
      <Router>
          <Layout>
            <Routes />
          </Layout>  
      </Router>       
        </Provider >       
    </MuiThemeProvider>


);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
