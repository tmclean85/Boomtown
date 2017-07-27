import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { FirebaseAuth } from '../../config/firebase';
import SignUp from './SignUp';


const addUser = gql`
mutation addUser (
  $fullname: String!
  $email: String!
  $bio: String
  $password: String!
) {
  addUser (
    fullname: $fullname
    email: $email
    bio: $bio
    password: $password
  ) {
      fullname
      email
      bio
    }
  }
`;

class SignUpContainer extends Component {
// TODO: firebase.auth like profilecontainer
  login = ({ email, password }) => {
    FirebaseAuth.signInWithEmailAndPassword(email, password).catch(function (error) {
      console.log(error)
    });
  }

  singleUser = (event) => {
    event.preventDefault();
    this.props.mutate({
      variables: { 
        fullname: 'tmclean',
        email: 'trevor@mclean.com',
        bio: 'server-side operations are clearly not my forte',
        password: 'password' }
    }).then(({ data }) => {
        this.login({ email: 'trevor@mclean.com', password: 'password' });
    }).catch((error) => {
      console.log('Unsuccesful query, friend.', error);
    });
  };
  
  render() {
    return (
        <SignUp singleUser={(event) => this.singleUser(event)} />
    );
  }
}

const SignUpData = graphql(addUser)(SignUpContainer);
export default SignUpData;
