// Generated with util/create-component.js
import React from "react";
import { ListProps } from "./List.types";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Icon } from "@iconify/react";
import { styled } from "@mui/material/styles";
import "./List.css";
const CustomMenu = styled(Menu)((props: ListProps) => ({
  backgroundColor: props.myColor,
}));
const List: React.FC<ListProps> = ({ children, icon, listIsActive,myColor }) => (
  <div data-testid="List" className="foo-bar">

      <CustomMenu keepMounted id="simple-menu" open={true} my>
        {children&&children.map((data) => (
          <>
            <MenuItem>
              {data}
              {icon&&<Icon icon={icon} />}
            </MenuItem>
          </>
        ))}
      {listIsActive && listIsActive.map((data, index) => (
      <MenuItem key={index}>
        {data.name}
        {data.active && <Icon icon={icon} />}
      </MenuItem>))}
      </CustomMenu>
  </div>
);
export default List;
