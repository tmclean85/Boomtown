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
      } else {
        console.log('Successful login!');
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
    const { authenticated, ...props } = this.props;
    if (authenticated) {
      return (
          <Redirect to={from} />
      );
    }
    return (
        <Login
            {...props}
            join={this.join}
            reset={this.reset}
            login={(e) => {
              e.preventDefault();
              this.login({
                email: 'trevor@trevor.com',
                password: 'password'
              });
            }}
        />
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.userProfile,
    // loginFormValues: getFormValues('LoginForm')(state),
    
  };
}

export default connect(mapStateToProps)(LoginContainer);
