import React from "react";

interface IModule {
  title: string;
  path: string;
}
interface Props {
  modules: IModule[];
}
const MenuSubList: React.FC<Props> = ({ modules }) => {
  return (
    <div className="menu-list">
      {modules.map((module) => {
        return (
          <div key={module.title} className="menu-list__item module__item">
            {module.title}
          </div>
        );
      })}
    </div>
  );
};

export default MenuSubList;
