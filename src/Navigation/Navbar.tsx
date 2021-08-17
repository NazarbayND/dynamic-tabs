import React from "react";
import Favorites from "./NavbarComponents/Favorites";
import Menu from "./Menu/Menu";
import Notifications from "./NavbarComponents/Notifications";
import ProjectManagement from "./NavbarComponents/ProjectManagement";
import Help from "./NavbarComponents/Help";
import ModuleNavItems from "./ModuleNavComponents/ModuleNavItems";

const Navbar = () => {
  return (
    <div className="navbar">
      <Menu />
      <Favorites />
      <Notifications />
      <ProjectManagement />
      <Help />
      <ModuleNavItems />
    </div>
  );
};

export default Navbar;
