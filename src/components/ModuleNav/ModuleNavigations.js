import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as DotsIcon } from "../icons/option-dots.svg";
import { ReactComponent as AddIcon } from "../icons/add.svg";

import Options from "./Options";
import History from "./History";
import Timer from "./Timer";
import Search from "./Search";

export default function ModuleNavigations({
  isSearchOpen,
  setIsSearchOpen,
  searchContent,
}) {
  return (
    <div className="nav-links">
      <ul className="right">
        <Search
          searchContent={searchContent}
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />

        <li className="nav-item">
          <Link to="#" style={{ padding: "10px" }}>
            <AddIcon />
          </Link>
        </li>

        <Timer />

        <li className="nav-item">
          <History />
        </li>
        <li className="nav-item">
          <Link to="#">
            <DotsIcon />
          </Link>
          <Options />
        </li>
      </ul>
    </div>
  );
}
