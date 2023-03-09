// Generated with util/create-component.js
import React from "react";
import List from "./List";

export default {
    title: "List Menu"
};
const MenuList=[
    "Profile",
    "My account",
    "Logout"
]
const MenuListWithActive=[
    {
         "name":"sort by date",
          "active":true,
    },
    {
        "name":"sort by name",
        "active":true
    }
]
export const ListWithChildren = () => <List children={MenuList} icon="fa:angle-right" colorText="red"/>;
export const ListWithOutIcon = () => <List children={MenuList}  />;
export const ListIsActive = () => <List listIsActive={MenuListWithActive}  icon="fa:check-circle" />;
