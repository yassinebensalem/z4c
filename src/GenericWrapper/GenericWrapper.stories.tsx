import React from 'react';
import { Story, Meta } from '@storybook/react';
import { GenericWrapperProps } from './GenericWrapper.types';
import GenericWrapper from './GenericWrapper';

export default {
    title: 'GenericWrapper',
} as Meta;

const Template: Story<GenericWrapperProps> = (args) => <GenericWrapper {...args} />;

export const WithChildren = Template.bind({});
WithChildren.args = {
    content: [
        "child1", 
        "child2",
        "child3",
        "child4",
        "child5"
    ],
    wrapperTitle: 'Title here',
};

export const WithColor = Template.bind({});
WithColor.args = {
    color: '#406A5220',
    wrapperTitle: 'Title here',
};

export const WithAddButton = Template.bind({});
WithAddButton.args = {
    actionAdd : true,
    wrapperTitle: 'Title here',
};