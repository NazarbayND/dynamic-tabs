import React from "react";
//Icons
import { ReactComponent as MenuIcon } from "../../components/icons/menuIcon.svg";
//Components
import Dropdown from "../../components/Dropdown/Dropdown";
import MenuList from "./MenuList";
import IconContainer from "../../components/IconComponent/IconContainer";
//style
import "./style.scss";

const Menu = () => {
  return (
    <Dropdown
      main={
        <IconContainer>
          <MenuIcon />
        </IconContainer>
      }
      content={<MenuList />}
      position="top"
    />
  );
};

export default Menu;
