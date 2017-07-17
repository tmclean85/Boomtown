import React from 'react';
import Gravatar from 'react-gravatar';
import { CardTitle, CardHeader, Card } from 'material-ui/Card';

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
    <Card>
      <div className="profileInfo">
        <CardTitle className="profileName" title={usersData.fullName} subtitle={usersData.bio} />
        <div className="profileBorrowed">
          <CardTitle title="Currently Borrowing:" />
        </div>
      </div>  
      <div className="profileMeta">
        <CardTitle title={hasBorrowed(usersData, itemsData)} subtitle="Items borrowed" />
        <CardTitle title={hasShared(usersData, itemsData)} subtitle="Items shared" />
        <CardHeader className="profile-image" avatar={<Gravatar email={usersData.email} size={170} />} />
      </div>
    </Card>
  </div>
);


export default Profile;
