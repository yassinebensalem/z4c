// // Generated with util/create-component.js
// import React from "react";
// import List from "./List";

// export default {
//     title: "List Menu"
// };
// const MenuList=[
//     "Profile",
//     "My account",
//     "Logout"
// ]
// const MenuListWithActive=[
//     {
//          "name":"sort by date",
//           "active":true,
//     },
//     {
//         "name":"sort by name",
//         "active":false
//     }
// ]
// export const ListWithChildren = () => <List children={MenuList} icon="fa:angle-right" colorIcon="#406A52" paddingLeft="20px"/>;
// export const ListWithOutIcon = () => <List children={MenuList}  />;
// export const ListIsActive = () => <List listIsActive={MenuListWithActive}  icon="fa:check-circle" colorIcon="#406A52" paddingLeft="20px" />;
import React from "react";
import List from "./List";
import { ListProps } from "./List.types";

export default {
  title: "List",
  component: List,
};

const Template = (args: ListProps) => <List {...args} />;

const MenuList = ["Profile", "My account", "Logout"];
const MenuListWithActive = [
  {
    name: "sort by date",
    active: true,
  },
  {
    name: "sort by name",
    active: false,
  },
];

export const ListWithChildren = Template.bind({});
ListWithChildren.args = {
  children: MenuList,
  icon: "fa:angle-right",
  colorIcon: "#406A52",
  paddingLeft: "20px",
};

export const ListWithOutIcon = Template.bind({});
ListWithOutIcon.args = {
  children: MenuList,
};

export const ListIsActive = Template.bind({});
ListIsActive.args = {
  listIsActive: MenuListWithActive,
  icon: "fa:check-circle",
  colorIcon: "#406A52",
  paddingLeft: "20px",
};
