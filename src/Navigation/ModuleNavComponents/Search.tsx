import React from "react";
import { SearchIcon } from "../../assets/icons";
import Card from "../../components/Cards/Card";
import LeftDropdown from "./LeftDropdown";

const Search = () => {
  return (
    <LeftDropdown
      Icon={SearchIcon}
      content={<Card content={"test search content"} />}
    />
  );
};

export default Search;
