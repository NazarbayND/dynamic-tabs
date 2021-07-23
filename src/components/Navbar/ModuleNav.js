import React from "react";
import "./navbar.css";
import NavItem from "./NavItem";
import NavLinks from "./NavLinks";


import { ReactComponent as SearchIcon } from "./icons/search.svg";
import { ReactComponent as AddIcon } from "./icons/add.svg";
import { ReactComponent as HistoryIcon } from "./icons/refresh-history.svg";
import { ReactComponent as DotsIcon } from "./icons/option-dots.svg";
import Counter  from "../Counter/Counter";

export default function ModuleNav() {

  return (
    <NavLinks right={true}>
      <NavItem > <SearchIcon/> </NavItem>
      <NavItem > <AddIcon/> </NavItem>
      <NavItem > <Counter/> </NavItem>
      <NavItem > <HistoryIcon/> </NavItem>
      <NavItem > <DotsIcon/> </NavItem>
    </NavLinks> 
     );
}

