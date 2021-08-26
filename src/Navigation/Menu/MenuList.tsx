import React from "react";

//Data
import { MenuListData } from "./MenuListData";

//State
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { tabAdd } from "../../store/tabs/tabs";
//Components
import MenuListItem from "./MenuListItem";
import { TabI } from "../../types/types";

interface Props {
  setShowDropdown?: React.Dispatch<boolean>;
}

const MenuList: React.FC<Props> = ({ setShowDropdown, ...rest }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleModuleClick = (tab: TabI) => {
    dispatch(tabAdd(tab));
    setShowDropdown(false);
  };

  return (
    <div className="menu-list">
      {MenuListData.map((section) => {
        return (
          <MenuListItem
            key={section.title}
            position="right"
            style={{ display: "flex" }}
            mainStyle={{ zIndex: 100 }}
            contentStyle={{ marginLeft: "14rem", zIndex: 90 }}
            title={section.title}
            modules={section.module}
            onModuleClick={handleModuleClick}
          />
        );
      })}
    </div>
  );
};

export default MenuList;
