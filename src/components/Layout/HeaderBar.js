import { connect } from 'react-redux';
import { white } from 'material-ui/styles/colors';
import React from 'react';
import AppBar from 'material-ui/AppBar';
import FilterList from '../FilterList';
import RaisedButton from 'material-ui/RaisedButton';
import { itemListFilter } from '../../redux/modules/items';
import logo from '../../images/boomtown-logo.svg';
import './styles.css';
import { FirebaseAuth } from '../../config/firebase';

const style = {
  margin: 12,
};


const HeaderBar = ({ dispatch, itemFilter }) => (
  <div className="appHeader">
    <AppBar
        showMenuIconButton={false}
        style={{ backgroundColor: white }}
        title={
            <div className="AppbarLeft">
                <a href="/">
                    <img className="AppbarLogo" src={logo} alt="Boombtown Logo" />
                </a>
                {(window.location.pathname === '/') ?
                <FilterList
                    dispatch={dispatch}
                    handleChange={itemListFilter}
                    itemFilter={itemFilter}
                /> : null
                }
            </div>
        }
    >
        <div>
            <RaisedButton label="Profile" primary={true} style={style} />
            <RaisedButton onTouchTap={() => FirebaseAuth.signOut()} label="Logout" secondary={true} style={style} />
        </div>
    </AppBar >
  </div>  
);

function mapStateToProps(state) {
  return {
    itemFilter: state.items.itemFilter
  };
}

export default connect(mapStateToProps)(HeaderBar);
