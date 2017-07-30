import React, { Component } from 'react';
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
      });
  }

  handleSubmit = () => {
    console.log('Image submitted');
  }


  render() {
    return (
        <Share
            selectImage={this.selectImage}
            handleImageUpload={this.handleImageUpload}
            handleSubmit={this.handleSubmit}
        />
    );
  }
}

export default ShareContainer;
