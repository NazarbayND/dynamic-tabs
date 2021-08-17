import React from "react";
//style
import "./style.scss";
//components
import History from "./History";
import Options from "./Options";
import Plus from "./Plus";
import Search from "./Search";
import Timer from "./Timer";

interface Props {
  search?: {};
  plus?: {};
  timer?: {};
  history?: {};
  options?: {};
}

const ModuleNavItems: React.FC<Props> = ({
  search,
  plus,
  timer,
  history,
  options,
}) => {
  return (
    <div className="module-nav">
      <Search />
      <Plus />
      <Timer />
      <History />
      <Options />
    </div>
  );
};

export default ModuleNavItems;
