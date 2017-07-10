import React from 'react';
import moment from 'moment';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './styles.css';

const ItemCard = ({ itemData }) => (
  <div className="itemCardWrapper">
    <Card>
      <CardMedia
        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
      >
        <img src={itemData.imageUrl} alt={itemData.title} />
      </CardMedia>
      <CardHeader
        title={itemData.itemOwner.fullName}
        subtitle={moment.unix(itemData.createdOn).startOf('hours').fromNow()}
        avatar=""
      />
  
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
