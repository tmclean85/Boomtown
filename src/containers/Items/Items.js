import React from 'react';
import ItemsContainer from './ItemsContainer';

import './styles.css';


const Item = ({ itemData }) => (
  <ul>
    <li>
      <img src={itemData.imageUrl} alt={itemData.title} />
      <h1>{itemData.title}</h1>
      <p>{itemData.tags}</p>
      <p>{itemData.description}</p>
    </li>
  </ul>  
);

const Items = ({ itemsData }) => (
  <div>
    <ul>
      {itemsData.map(itemData => (
        <Item itemData={itemData} />
      ))}
    </ul>
  </div>
);

export default Items;
