import React from "react";
import withDropdown from "../../components/Dropdown/withDropdown";
import MenuSubList from "./MenuSubList";

interface Props {
  title: string;
}

const MenuListItem: React.FC<Props> = ({ title, ...rest }) => {
  return <div className="menu-list__item">{title}</div>;
};

export default withDropdown(MenuListItem, MenuSubList);
