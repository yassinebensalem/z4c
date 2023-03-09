import React from 'react';
import { Story, Meta } from '@storybook/react';
import { StoreCardProps } from './StoreCard.types';
import Store from './StoreCard';
import stores from './stores.json';


export default {
  title: 'Store',
  component: Store,
} as Meta;

const Template: Story<StoreCardProps> = (args) => <Store {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: stores[0].image,
  title: stores[0].title,
  starIcon: stores[0].starIcon,
  rating: stores[0].rating,
};
