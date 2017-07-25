import * as firebase from 'firebase';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCIRhJQI9lnuaR9LQpkg9n-4eW202iKjWs',
  authDomain: 'boomtown-a68bc.firebaseapp.com',
  databaseURL: 'https://boomtown-a68bc.firebaseio.com',
  projectId: 'boomtown-a68bc',
  storageBucket: 'boomtown-a68bc.appspot.com',
  messagingSenderId: '720156528099'
};

const FirebaseApp = firebase.initializeApp(config);
const FirebaseAuth = FirebaseApp.auth();
const FirebaseDB = firebase.database();

export {
  FirebaseApp,
  FirebaseAuth,
  FirebaseDB
};
