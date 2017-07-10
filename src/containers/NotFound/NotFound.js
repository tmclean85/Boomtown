import React from 'react';
import './styles.css';
import GrumpyCat from '../../images/grumpy.4a3c2bc7.svg';

const NotFound = () => (
  <div className="notFoundWrapper">
    <img src={GrumpyCat} alt="grumpycat" />
    <h1>Naw.</h1>
  </div>  
);


export default NotFound;
