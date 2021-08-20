import React, { useState } from "react";
//style
import "./style.scss";
//Icons
import { ReactComponent as MenuIcon } from "../../components/icons/menuIcon.svg";
//Components
import Dropdown from "../../components/Dropdown/Dropdown";
import MenuList from "./MenuList";
import IconContainer from "../IconComponent/IconContainer";
//State
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { tabAdd } from "../../store/tabs/tabs";

const Menu = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleModuleClick = (module) => {
    dispatch(tabAdd({ module, history }));
  };

  return (
    <Dropdown
      main={
        <IconContainer>
          <MenuIcon />
        </IconContainer>
      }
      content={<MenuList onModuleClick={handleModuleClick} />}
      position="top"
    />
  );
};

export default Menu;
