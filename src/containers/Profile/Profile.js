import React from 'react';
import Gravatar from 'react-gravatar';
import { CardTitle } from 'material-ui/Card';

import './styles.css';

const hasBorrowed = (usersData, itemsData) => {
  const borrowed = itemsData.filter(item => usersData.id === item.itemHolder);
  return borrowed.length;
};

const hasShared = (usersData, itemsData) => {
  const shared = itemsData.filter(item => usersData.id === item.itemOwner.id);
  return shared.length;
};


const Profile = ({ usersData, itemsData }) => (
    <div className="profileCard">
        <CardTitle titleStyle={{ fontSize: '2.5rem' }} title={usersData.fullName} subtitle={usersData.bio} />
        <div className="profile-meta">
          <CardTitle title={hasBorrowed(usersData, itemsData)} subtitle="Items borrowed" />
          <CardTitle title={hasShared(usersData, itemsData)} subtitle="Items shared" />
        </div>
        <Gravatar className="profile-image" email={usersData.email} size={120} />
    </div>
);


export default Profile;
