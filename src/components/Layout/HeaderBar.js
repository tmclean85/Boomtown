
import React from 'react';
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { white } from 'material-ui/styles/colors';
import logo from '../../images/boomtown-logo.svg';
import './styles.css';

const style = {
  margin: 12,
};


const HeaderBar = () => (
  <div className="appHeader">
    <AppBar
        showMenuIconButton={false}
        style={{ backgroundColor: white }}
        title={
              <div className="selectField">
                  <img src={logo} alt="Boombtown Logo" />
                  <SelectField
                      multiple={true}
                      hintText="Filter by Tag"
                  >
                      <MenuItem value={1} primaryText="Electronics" />
                      <MenuItem value={2} primaryText="Household Items" />
                      <MenuItem value={3} primaryText="Musical Instruments" />
                      <MenuItem value={4} primaryText="Physical Media" />
                      <MenuItem value={5} primaryText="Recreational Equipment" />
                      <MenuItem value={6} primaryText="Sporting Goods" />
                      <MenuItem value={7} primaryText="Tools" />            
                  </SelectField>
              </div>
        }
    >

        <div>
            <RaisedButton label="My Profile" primary={true} style={style} />
            <RaisedButton label="Logout" secondary={true} style={style} />
        </div>
    </AppBar >
  </div>  
);

export default HeaderBar;
