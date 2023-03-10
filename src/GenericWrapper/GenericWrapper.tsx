// Generated with util/create-component.js
import React from "react";
import "./GenericWrapper.css";
import { GenericWrapperProps } from "./GenericWrapper.types";
import { styled } from "@mui/material/styles";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Icon } from '@iconify/react';

////////////////// WRAPPER STYLE
const CustomCard = styled(Card)((props : GenericWrapperProps) => ({
    backgroundColor : props.color || "white",
    boxShadow : "none",
    borderWidth : "1px",
    borderStyle : "solid" ,
    borderRadius : "6px",
    borderColor : "#d4d4d4",
    width : "100%"
}));

////////////////// CONTENT STYLE
const CustomCardContent = styled(CardContent)(()=>({
    display : "flex",
    flexDirection : "row",
    flexWrap : "wrap"
}));

const GenericWrapper: React.FC<GenericWrapperProps> = ({ wrapperTitle, content, color, actionAdd }) => 
(
    <CustomCard color={color}>
        
        {/* ////////////////////// HEADER */}
        <CardHeader title={wrapperTitle} action={actionAdd && 
            <button style={{background:'none', border: 'none', cursor: 'pointer'}}
                onClick={()=>(
                    //////////////// button function
                    alert("add button clicked")
                )}>
                {/* //////////////// button icon */}
                <Icon icon="tabler:circle-plus" width="26" height="26" color="#4B465C" />
            </button>
        }/>
        
        {/* //////////////////////  CONTENT */}
        <CustomCardContent>
            {content && content.map((child)=> {
            return (
                <div style={{margin: "5px",}}>
                    {child}
                </div>
            )})}
        </CustomCardContent>
    </CustomCard>
);

export default GenericWrapper;