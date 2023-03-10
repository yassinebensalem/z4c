import React from 'react';
import { StoreCardProps } from './StoreCard.types';
import { Icon } from '@iconify/react';
import "./StoreCard.css";


const Store: React.FC<StoreCardProps> = ({ image, title, starIcon, rating }) => {
  return (
    <div className="store">
      <img className="store-image" src={image} alt={title} />
        <h2 className="store-title">{title}</h2>
        <p className="store-rating">{rating} <Icon icon="material-symbols:star"/> </p>
    </div>
  );
};

export default Store;
