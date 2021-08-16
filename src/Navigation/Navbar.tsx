import React from "react";
import Favorites from "./NavbarComponents/Favorites";
import Menu from "./Menu/Menu";
import Notifications from "./NavbarComponents/Notifications";
import ProjectManagement from "./NavbarComponents/ProjectManagement";
import Help from "./NavbarComponents/Help";

const Navbar = () => {
  return (
    <div className="navbar">
      <Menu />
      <Favorites />
      <Notifications />
      <ProjectManagement />
      <Help />
    </div>
  );
};

export default Navbar;
