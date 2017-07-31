import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import {
  CardHeader,
  Card,
  CardTitle,
  CardText,
  CardMedia
} from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';
import placeHolderImage from '../../images/item-placeholder.jpg';
import './styles.css';

const textField = ({
  label,
  input,
  meta: {
    touched,
    error
  },
  ...custom
}) => (
    <TextField
        hintText={label}
        errorText={touched && error}
        floatingLabelText={label}
        {...input}
        {...custom}
    />
);

const selectField = ({
  label,
  input,
  meta: {
    touched,
    error
  },
  children,
  ...custom
}) => (
    <SelectField
        errorText={touched && error}
        floatingLabelText={label}
        children={children}
        onChange={(
          event,
          index,
          value
        ) => input.onChange(value)}
        {...input}
        {...custom}
    />
);

const tags = [
    { id: 1, title: 'Household Items' },
    { id: 2, title: 'Electronics' },
    { id: 3, title: 'Physical Media' },
    { id: 4, title: 'Recreational Equipment' },
    { id: 5, title: 'Tools' },
];

let Share = ({ selectImage, shareForm, addNewItem, handleSubmit, handleImageUpload }) => {
  let uploadInput = false;
  const renderTags = (tags) => (tags.map((tag) => (
      <MenuItem
        insetChildren={true}
        key={tag.title}
        value={tag}
        primaryText={tag.title}
        checked={
          shareForm && shareForm.values.tags.includes(tag)
        }
      />
  )));

  return (
    <div className="shareContainer">
      <div className="shareCard">
        <Card>
          <CardMedia>
            <img src={placeHolderImage} alt="placeholder" />
          </CardMedia>  
          <CardHeader 
            title="Owner"
            subtitle="Created on"
          />
          <CardTitle title="New Item Title" subtitle="New Tags" />
          <CardText>
            New Item Description
          </CardText>
        </Card>
      </div>
      <div className="shareForm">
        <form onSubmit={addNewItem}>
          <h2>Add an image</h2>
          <RaisedButton
              label="Select an Image"
              onClick={() => selectImage(uploadInput)}
            /><br />
            <h1>Add a Title & Description</h1>
            <Field
                component={textField}
                label="Item Title"
                name="shareTitle"
            /><br />
            <Field
                component={textField}
                label="Item Description"
                name="shareDescription"
            /><br />
            <h1>Categorize Your Item</h1>
            <Field
                name="itemTags"
                component={selectField}
                label="Categorize Your Item"
            >
                {renderTags(tags)}
            </Field>
            <input
                onChange={handleImageUpload}
                ref={(input) => { uploadInput = input; }}
                hidden
                type="file"
                id="input"
            />
            <h1>Confirm Things!</h1>
            <RaisedButton
                label="Share New Item"
                type="submit"
            />
        </form>
      </div>
    </div>
  );
};

Share = reduxForm({
  form: 'share'
})(Share);


export default Share;
