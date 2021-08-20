import React from "react";
import { SearchIcon } from "../../assets/icons";
import Card from "../../components/Cards/Card";
import withDropdown from "../../components/Dropdown/withDropdown";
import withLeftDropdown from "../../components/Dropdown/withLeftDropdown";
import withIconContainer from "../IconComponent/withIconContainer";

const SearchContent = ({ ...rest }) => {
  return <Card content={"test search content"} />;
};
export default withLeftDropdown(
  withDropdown(withIconContainer(SearchIcon), SearchContent)
);
