import React from "react";
import { useState } from "react";
import { MenuIcon } from "../../assets/icons";
import IconContainer from "../IconComponent/IconContainer";
import MenuList from "./MenuList";

const MenuClick = ({}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleModuleClick = (module) => {};
  return (
    <div
      className="dropdown-container"
      onMouseLeave={() => setShowDropdown(false)}
    >
      <div
        className="dropdown__main"
        onMouseEnter={() => setShowDropdown(true)}
      >
        <IconContainer>
          <MenuIcon />
        </IconContainer>
      </div>
      <div className={`dropdown__content top ${showDropdown ? "open" : ""}`}>
        <MenuList onModuleClick={handleModuleClick} />
      </div>
    </div>
  );
};

export default MenuClick;
