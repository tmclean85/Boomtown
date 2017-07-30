import {
  ApolloClient,
  createBatchingNetworkInterface,
  applyBatchMiddleware
} from 'apollo-client';

import { FirebaseAuth } from './firebase';

const networkInterface = createBatchingNetworkInterface({
  uri: 'http://localhost:5000/graphql',
});

networkInterface.use([{
  async applyBatchMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }
    const token = await FirebaseAuth.currentUser.getIdToken(true);
    req.options.headers['Authorization'] = token;
    next();
  },
}]);

const apolloClient = new ApolloClient({
  networkInterface,
  connectToDevTools: true,
});

const client = new ApolloClient({ networkInterface });
export default client;
