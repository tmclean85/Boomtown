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
        <img src={itemData.imageUrl} alt={itemData.title} />
      </CardMedia>
      <Link to={'/profile/'+itemData.itemOwner.id}>
      <div className="cardBox">
        <Gravatar email={itemData.itemOwner.email} />
        <CardHeader
          title={itemData.itemOwner.fullname}
          subtitle={moment.unix(itemData.createdOn).startOf('hours').fromNow()}
        />
      
      </div>
      </Link>  
  
      <CardTitle title={itemData.title} subtitle={itemData.tags} />
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
