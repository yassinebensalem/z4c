import React from "react";
// import styled from "styled-components";
import { styled } from "@mui/material/styles";
import { PageTitleProps } from "./PageTitle.types";
const CustomTitle = styled("div")((props: PageTitleProps) => ({
  backgroundColor: props.bgColor,
  color:props.color,
  fontSize:props.fontSize,
  title:props.title,
  fontFamily:props.fontFamily,
  fontWeight:props.fontWeight,
  letterSpacing:props.letterSpacing,
  height:props.height,
  paddingLeft:props.paddingLeft,
  width:props.width,
  borderRadius:props.borderRadius,
}));
const PageTitle: React.FC<PageTitleProps> = ({
  bgColor,
  color,
  fontFamily,
  fontWeight,
  letterSpacing,
  fontSize,
  height,
  paddingLeft,
  width,
  borderRadius,
  title,
}) => (
  <CustomTitle 
  color={color}
  bgColor={bgColor}
  fontFamily={fontFamily}
  fontWeight={fontWeight}
  letterSpacing={letterSpacing}
  fontSize={fontSize}
  height={height}
  paddingLeft={paddingLeft}
  width={width}
  title={title}
  borderRadius={borderRadius}
  >
   <h1 className="pageTitle">{title}</h1> 
  </CustomTitle>
);
export default PageTitle;
