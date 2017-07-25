import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import { FirebaseAuth } from '../../config/firebase';
// import { FirebaseAuth, FirebaseDB } from '../../config/firebase';

class LoginContainer extends Component {

  static propTypes = {
  };

  login = ({ email, password }) => {
    FirebaseAuth.signInWithEmailAndPassword(email, password)
    .catch((err) => {
      if (err.code === 'auth/user-not-found') {
        console.log('User not found');
        // this.props.dispatch(showJoinModal(true));
      } else {
        console.log('Successful login!');
        // this.props.dispatch(showLoginError(true));
      }
    });
  }

//   join = () => {
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//     .catch(function(error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // ...
//     });
//   }

  render() {
    this.login({ email: 'trevor@trevor.com', password:'password' });
    const { authenticated, loginFormValues, ...props } = this.props;
    if (authenticated) {
      return (
          <Redirect to="/" />
      );
    }
    return (
        <Login
            {...props}
            login={this.login}
        />
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.usersData
  };
}

export default connect(mapStateToProps)(LoginContainer);
