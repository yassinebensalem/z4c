// Generated with util/create-component.js
import React from "react";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";

import { ButtonProps } from "./Button.types";

import "./Button.css";

interface Props {
  myColor: string;
  className: string;
}

const CustomButton = styled(Button)((props: Props) => ({
  backgroundColor: props.myColor,
}));

const ButtonCustom: React.FC<ButtonProps> = ({ foo, color }) => (
  <CustomButton myColor={color} className="foo-bar">
    {foo}
  </CustomButton>
);

export default ButtonCustom;
