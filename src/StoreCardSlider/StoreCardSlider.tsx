import React from 'react';
import Box from '@mui/material/Box';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import StoreCard from '../StoreCard/StoreCard';
import { StoreCardSliderProps } from './StoreCardSlider.types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { Icon } from '@iconify/react';

const StoreCardSlider: React.FC<StoreCardSliderProps> = ({ stores, title }) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
    perView: 3,
    origin: 'auto',
    },
  });

  return (
    <>
      <ListItem disableGutters secondaryAction={<IconButton aria-label="back"><Icon icon="material-symbols:arrow-back-sharp" hFlip={true} /></IconButton>}>
        <ListItemText primary={title} className="category-title"/>
      </ListItem>
      <Box ref={ref} className='keen-slider'>
        {stores.map((store) => (
          <Box key={store.title} className='keen-slider__slide'>
            <StoreCard title={store.title} image={store.image} rating={store.rating} starIcon={<>{store.starIcon}</>} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default StoreCardSlider;





