import React from "react";
import { CloseIcon } from "../../assets/icons";
import "./style.scss";

interface Props {
  tab: {
    title: string;
    active?: boolean;
  };
  onTabClick: () => void;
  onTabClose: () => void;
}

const Tab: React.FC<Props> = ({ tab, onTabClick, onTabClose }) => {
  const handleTabClick = (e) => {
    if (e.target.name === "closeButton") {
      e.preventDefault();
      e.stopPropagation();
      return;
    } else onTabClick();
  };
  return (
    <div className="tab-container">
      <div
        className={`tab ${tab.active ? "" : "non-active"}`}
        onClick={handleTabClick}
      >
        <span className="tab__title">{tab.title}</span>
      </div>
      <CloseIcon className="tab__close-icon" onClick={() => onTabClose()} />
    </div>
  );
};

export default Tab;
