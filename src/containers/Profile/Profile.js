import React from 'react';
import Gravatar from 'react-gravatar';
import PropTypes from 'prop-types';
import { CardTitle } from 'material-ui/Card';

import './styles.css';


const Profile = ({ usersData }) => (
    <div className="profileCard">
        <CardTitle titleStyle={{ fontSize: '2.5rem' }} title={usersData.fullname} subtitle={usersData.bio} />
        <div className="profile-meta">
             <CardTitle title={usersData.borrowed.length} subtitle="Items borrowed" />
          <CardTitle title={usersData.items.length} subtitle="Items shared" />
        </div>
         <Gravatar className="profile-image" email={usersData.email} size={120} />
    </div>
);

Profile.propTypes = {
  usersData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Profile;
