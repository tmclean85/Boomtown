import React from 'react';
import Gravatar from 'react-gravatar';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import './styles.css';

// const getBorrowerInfo = (usersData, itemsData) => {
//   // const borrowed = itemsData.filter(item => usersData.id === item.itemHolder);
//   // return borrowed.length;
// };

const moment = require('moment');

moment().format();

const ItemCard = ({ itemData }) => (
    <div className="itemCardWrapper">
        <Card>
            {itemData.borrower === null ? (
                <CardMedia>
                    <img src={itemData.imageurl} alt={itemData.title} />
                </CardMedia>
            ) : (
                <CardMedia
                    overlay={<CardTitle subtitle="UNAVAILABLE" />}
                >
                    <img src={itemData.imageurl} alt={itemData.title} />
                </CardMedia>
            )}
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
