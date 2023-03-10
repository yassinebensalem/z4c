// Generated with util/create-component.js
import React from "react";
import "./PageTitle.css";
import { Story } from "@storybook/react/types-6-0";
import PageTitle from "./PageTitle";
import { PageTitleProps } from "./PageTitle.types";
export default {
  title: "PageTitle",
  component: "PageTitle",
};

const Template: Story<PageTitleProps> = (args) => <PageTitle {...args} />;
export const Title = Template.bind({});
Title.args = {
  title: "Orders history",
  bgColor: "#406A52",
  color: "#ECECEC",
  fontFamily: "Arial",
  fontWeight: "bold",
  fontSize: "15px",
  letterSpacing: "1px",
  paddingLeft: "25px",
  width: "270px",
  borderRadius: "0 30px 30px 0",
  height: "54px",
};
