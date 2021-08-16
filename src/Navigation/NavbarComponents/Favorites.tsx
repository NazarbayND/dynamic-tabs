import React from "react";
//components
import IconContainer from "../../components/IconComponent/IconContainer";
//icons
import { FavoritesIcon } from "../../assets/icons";
import Dropdown from "../../components/Dropdown/Dropdown";

const Favorites = () => {
  return (
    <Dropdown
      main={
        <IconContainer>
          <FavoritesIcon />
        </IconContainer>
      }
      content={<div>Test Component</div>}
      position="top"
    />
  );
};

export default Favorites;
