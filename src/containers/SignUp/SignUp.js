import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import bottomLeft from '../../images/home-bl.svg';
import topRight from '../../images/home-tr.svg';


import './styles.css';

const SignUp = ({ singleUser }) => (
  <div className="signUpPage">
    <div className="topRight">
      <img src={topRight} alt="Sky" />
    </div>
    <div className="bottomLeft">
      <img src={bottomLeft} alt="City" />
    </div>
    <form onSubmit={singleUser} >
      <Paper className="signUpCard">
          <h1>No Account With this Email.</h1>
          <p>The email you provided is not registered. Would you like to use it to join and start sharing with everyone?</p>
          <TextField
              className="textField"
              hintText="Your Name"
              floatingLabelText="Your Name"
              errorText="This field is required"
          /> <br />
          <TextField
              className="textField"
              hintText="Tell Us About Yourself!"
              floatingLabelText="Tell Us About Yourself!"
              errorText="This field is required"
          />
          <div className="buttonBox">
            <RaisedButton
                className="noThanksButton"
                label="NO THANKS"
            />
            <RaisedButton
                className="joinButton"
                label="JOIN!"
                type="submit"
            />
          </div>  
      </Paper>
    </form>
  </div>
);

export default SignUp;
