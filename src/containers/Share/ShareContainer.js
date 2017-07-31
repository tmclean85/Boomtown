import React, { Component } from 'react';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { FirebaseAuth, FirebaseStorage } from '../../config/firebase';
import Share from './Share';

class ShareContainer extends Component {

  selectImage = (fileInput) => {
    this.fileInput = this.fileInput || fileInput;
    this.fileInput.click();
  }

  handleImageUpload = () => {
    const cloud = FirebaseStorage.ref();
    const userId = FirebaseAuth.currentUser.uid;
    const fileName = this.fileInput.files[0].name;

    cloud.child(`images/${userId}/${fileName}`)
      .put(this.fileInput.files[0])
      .then(result => {
        console.log(result);
      }).catch((e) => {
        console.log(e);
      });
  }

  handleSubmit = () => {
    console.log('Image submitted');
  }


  render() {
    return (
        <Share />
    );
  }
}

const addItem = gql`
    mutation addItem(
        $title: String!
        $imageurl: String
        $itemowner: ID!              
        $description: String!
        $tags: [AssignedTag]!
    ) {
        addItem(
        title: $title
        imageurl: $imageurl
        itemowner: $itemowner          
        description: $description
        tags: $tags
    ) {
        title
        imageurl
        description
        itemowner{
            id
        }
        tags
            {
            title
            }
        }
    }
`;


export default ShareContainer;
