import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import { FirebaseAuth } from '../../config/firebase';
import { showLoginError, sendToRegister } from '../../redux/modules/login';
// import { FirebaseAuth, FirebaseDB } from '../../config/firebase';

class LoginContainer extends Component {

  static propTypes = {
  };

  login = ({ email, password }) => {
    FirebaseAuth.signInWithEmailAndPassword(email, password)
    .catch((err) => {
      if (err.code === 'auth/user-not-found') {
        this.props.dispatch(sendToRegister(true));
      } else {
        this.props.dispatch(showLoginError(true));
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
    // this.login({ email: 'trevor@trevor.com', password:'password' });
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { authenticated, formData, signIn, ...props } = this.props;
    if (authenticated) {
      return (
          <Redirect to={from} />
      );
    }

    if (signIn) {
      return (
          <Redirect to="/signup" />
      );
    }

    return (
        <Login
            {...props}
            login={(e) => {
              e.preventDefault();
              this.login({
                email: `${this.props.values.values.email}`,
                password: `${this.props.values.values.password}`
              });
            }}
        />
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.userProfile,
    values: state.form.login,
    signIn: state.auth.knownUser
    // loginFormValues: getFormValues('LoginForm')(state),
    
  };
}

export default connect(mapStateToProps)(LoginContainer);
