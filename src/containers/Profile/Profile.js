import React from 'react';
import ItemCardList from '../../components/ItemCardList';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Gravatar from 'react-gravatar';

import './styles.css';


const Profile = ({ user }) => (
  <div className="user-box">
    <Card
        className="profile-header"
        users={user}
    >
      <div className="username">
        <CardHeader
            title="My Name"
            subtitle="Subtitle"
            avatar={<Gravatar email="trevor.a.mclean@gmail.com" className="gravatar-img" />}
        />
      </div>   
      <div className="user-meta"> 
        <CardText>
        <p>items shared</p>
        <p>items borrowed</p>
        </CardText>
      </div>    
    </Card>
  </div>  
);


export default Profile;
