import React from "react";
import Dropdown from "../../components/Dropdown/Dropdown";

//Data
import { MenuListData } from "./MenuListData";
import MenuSubList from "./MenuSubList";

const MenuList = () => {
  return (
    <div className="menu-list">
      {MenuListData.map((section) => {
        return (
          <Dropdown
            key={section.title}
            main={<div className="menu-list__item">{section.title}</div>}
            content={<MenuSubList modules={section.module} />}
            position="right"
            style={{ display: "flex" }}
            mainStyle={{ zIndex: 100 }}
            contentStyle={{ marginLeft: "14rem", zIndex: 90 }}
          />
        );
      })}
    </div>
  );
};

export default MenuList;
