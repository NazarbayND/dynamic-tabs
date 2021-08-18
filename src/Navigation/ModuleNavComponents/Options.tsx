import React from "react";
import { OptionsIcon } from "../../assets/icons";

import LeftDropdown from "./LeftDropdown";
const optionsList = [
  {
    path: "/reports",
    title: "Reports",
  },
  {
    path: "/toolbox",
    title: "Toolbox",
  },
  {
    path: "/notifications",
    title: "Notifications",
  },
  {
    path: "/udf",
    title: "UDF",
  },
  {
    path: "/database-table",
    title: "Database Table",
  },
  {
    path: "/settings",
    title: "Settings",
  },
];

const Options = () => {
  return (
    <LeftDropdown
      Icon={OptionsIcon}
      content={
        <div className="menu-list">
          {optionsList.map((option) => {
            return (
              <div key={option.title} className="menu-list__item">
                {option.title}
              </div>
            );
          })}
        </div>
      }
    />
  );
};

export default Options;
