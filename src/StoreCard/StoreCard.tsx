import React from 'react';
import { StoreCardProps } from './StoreCard.types';
import { Icon } from '@iconify/react';
import './Store.css';


const Store: React.FC<StoreCardProps> = ({ image, title, starIcon, rating }) => {
  return (
    <div className="store">
      <img src={image} alt={title} />
      <div className="store-title">
        <h2>{title}</h2>
        <div className="store-rating">
        <p>{rating} <Icon icon="material-symbols:star" /> </p>
        </div> 
      </div>
    </div>
  );
};


export default Store;
