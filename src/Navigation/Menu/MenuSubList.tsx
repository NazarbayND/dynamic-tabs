import React from "react";

interface IModule {
  title: string;
  path: string;
}
interface Props {
  modules: IModule[];
  onModuleClick: (module) => void;
}
const MenuSubList: React.FC<Props> = ({ modules, onModuleClick }) => {
  return (
    <div className="menu-list">
      {modules.map((module) => {
        return (
          <div
            key={module.title}
            className="menu-list__item module__item"
            onClick={() => {
              onModuleClick(module);
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
