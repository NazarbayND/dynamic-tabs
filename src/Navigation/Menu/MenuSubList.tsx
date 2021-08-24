import React from "react";
import { TabI } from "../../types/types";

interface Props {
  modules: TabI[];
  onModuleClick: (module: TabI) => void;
  setShowDropdown?: React.Dispatch<boolean>;
}

const MenuSubList: React.FC<Props> = ({
  modules,
  onModuleClick,
  setShowDropdown,
  ...rest
}) => {
  return (
    <div className="menu-list">
      {modules.map((module: TabI) => {
        return (
          <div
            key={module.title}
            className="menu-list__item module__item"
            onClick={() => {
              onModuleClick(module);
              setShowDropdown(false);
            }}
          >
            {module.title}
          </div>
        );
      })}
    </div>
  );
};

export default MenuSubList;
