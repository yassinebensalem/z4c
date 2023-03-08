import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './Button.types';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Click me!',
  type: 'primary',
  color: '#ffffff',
  backgroundColor: '#1ea7fd',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Click me too!',
  type: 'secondary',
  color: '#ffffff',
  backgroundColor: '#1e90ff',
};
