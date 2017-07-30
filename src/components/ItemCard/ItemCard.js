import React from 'react';
import moment from 'moment';
import Gravatar from 'react-gravatar';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import './styles.css';

// const getBorrowerInfo = (usersData, itemsData) => {
//   // const borrowed = itemsData.filter(item => usersData.id === item.itemHolder);
//   // return borrowed.length;
// };

const ItemCard = ({ itemData }) => (
  <div className="itemCardWrapper">
    <Card>
      <CardMedia
        overlay={<CardTitle title="" subtitle={itemData.available} />}
      >
        <img src={itemData.imageurl} alt={itemData.title} />
      </CardMedia>
      <Link to={'/profile/' + itemData.itemowner.id}>
      <div className="cardBox">
        <Gravatar email={itemData.itemowner.email} />
        <CardHeader
          title={itemData.itemowner.fullname}
          subtitle={(moment(itemData.createdon, 'YYYYMMDD')).fromNow()}
        />
      
      </div>
      </Link>
  
      <CardTitle title={itemData.title} subtitle={(itemData.tags.map(tag => tag.title).join(', '))} />
      <CardText>
        <p>{itemData.description}</p>
      </CardText>
      <CardActions>
        <FlatButton label="Borrow" />
      </CardActions>
    </Card>
  </div>
);

export default ItemCard;
