import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';

let uploadInput = undefined;

const Share = ({ selectImage, handleSubmit, handleImageUpload }) => (
    <form onSubmit={handleSubmit}>
        <RaisedButton
            label="Select image"
            onClick={() => selectImage(uploadInput)}
        />
        <input
            onChange={handleImageUpload}
            ref={(input) => { uploadInput = input; }}
            hidden
            type="file"
            id="input"
        />
    </form>
);


export default Share;
