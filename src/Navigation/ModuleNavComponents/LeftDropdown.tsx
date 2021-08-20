import React, { useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import IconContainer from "../IconComponent/IconContainer";

const LeftDropdown = ({ Icon, content }) => {
  return (
    <Dropdown
      main={
        <IconContainer>
          <Icon />
        </IconContainer>
      }
      position="top"
      content={content}
      style={{ display: "flex", justifyContent: "flex-end" }}
      contentStyle={{ top: "4.5rem" }}
    />
  );
};

export default LeftDropdown;
