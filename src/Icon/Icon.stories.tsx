// Generated with util/create-component.js
import React from "react";
import { Story, Meta } from "@storybook/react";
import { IconProps } from "@iconify/react";

import Icon from "./Icon";

export default {
  title: "Icon",
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
  fontSize: "1.5rem",
  icon: "tabler:layout-grid-add",
  className: "icon",
};
