import React from 'react';
import Gravatar from 'react-gravatar';
import { CardTitle } from 'material-ui/Card';

import './styles.css';


const Profile = ({ usersData }) => (
    <div className="profileCard">
        <CardTitle titleStyle={{ fontSize: '2.5rem' }} title={usersData.fullName} subtitle={usersData.bio} />
        <div className="profile-meta">
             <CardTitle subtitle="Items borrowed" />
          <CardTitle title={usersData.items.length} subtitle="Items shared" />
        </div>
         <Gravatar className="profile-image" email={usersData.email} size={120} />
    </div>
);


export default Profile;
