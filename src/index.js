import React from 'react';
// import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { ApolloProvider } from 'react-apollo';

import {
  BrowserRouter as Router,
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import client from './config/apolloClient';
import './index.css';
import muiTheme from './config/theme';
import store from './redux/store';
import Layout from './components/Layout';
import Routes from './routes';

injectTapEventPlugin();

const Boomtown = () => (

  <MuiThemeProvider muiTheme={muiTheme}>
    <ApolloProvider client={client} store={store}>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </ApolloProvider>
  </MuiThemeProvider>


);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
