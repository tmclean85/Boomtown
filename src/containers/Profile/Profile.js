import React from 'react';
import Gravatar from 'react-gravatar';
import { CardTitle, Card } from 'material-ui/Card';

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
    <Card className="profileCard">
  
        <CardTitle className="profileName" title={usersData.fullName} subtitle={usersData.bio} />
        <CardTitle title={hasBorrowed(usersData, itemsData)} subtitle="Items borrowed" />
        <CardTitle title={hasShared(usersData, itemsData)} subtitle="Items shared" />        
        <Gravatar className="profile-image" email={usersData.email} size={120} />
    </Card>
);


export default Profile;
