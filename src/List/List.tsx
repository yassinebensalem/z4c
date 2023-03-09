// Generated with util/create-component.js
import React,{useState} from "react";
import { ListProps } from "./List.types";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Icon } from "@iconify/react";
import { styled } from "@mui/material/styles";
import "./List.css";
const CustomIcon = styled(Icon)((props: ListProps) => ({
  color: props.colorIcon,
  paddingLeft:props.paddingLeft
}));
const List: React.FC<ListProps> = ({ children, icon, listIsActive,colorIcon,paddingLeft }) => {
  return(
  <>
      <Menu elevation={2}  keepMounted id="simple-menu" open={true} className="Menu">
        {children&&children.map((data) => (
          <>
            <MenuItem sx={{boxShadow:'none'}} className="MenuItem">
              {data}
              {icon&&<CustomIcon icon={icon} colorIcon={colorIcon} paddingLeft={paddingLeft}/>}
            </MenuItem>
          </>
        ))}
      {listIsActive && listIsActive.map((data, index) => (
      <MenuItem  key={index} className="MenuItem">
        {data.name}
        {data.active && <CustomIcon icon={icon} colorIcon={colorIcon} paddingLeft={paddingLeft}/>}
      </MenuItem>))}
      </Menu>
  </>
)};
export default List;
