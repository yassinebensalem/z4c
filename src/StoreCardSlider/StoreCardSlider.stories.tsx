import React from 'react';
import { Meta, Story } from '@storybook/react';
import StoreCardSlider from './StoreCardSlider';
import { StoreCardSliderProps } from './StoreCardSlider.types';
import stores from '../StoreCard/stores.json';

export default {
  title: 'StoreCardSlider',
  component: StoreCardSlider,
} as Meta;

const Template: Story<StoreCardSliderProps> = (args) => <StoreCardSlider {...args} />;

export const Default = Template.bind({});
Default.args = {
  stores,
  title: 'Recommended Stores',
};

