import React, { useState, /* useEffect */ } from "react";
import "./navbar.css";

import NavItem from "./NavItem";
import NavLinks from "./NavLinks";
import TitleTab from "./TitleTab";
import Menu from "./Menu";

import  {ReactComponent as NotifIcon} from './icons/notifications.svg'
import { ReactComponent as FavIcon } from "./icons/favorites.svg";

import { ReactComponent as HelpIcon } from "./icons/help.svg";
import { ReactComponent as PmIcon } from "./icons/pm.svg";
import { ReactComponent as CapaIcon } from "./icons/capa.svg";
import { ReactComponent as SearchIcon } from "./icons/search.svg";
import { ReactComponent as AddIcon } from "./icons/add.svg";
import { ReactComponent as HistoryIcon } from "./icons/refresh-history.svg";
import { ReactComponent as OptionsIcon } from "./icons/option-dots.svg";
import Counter  from "../Counter/Counter";


const Navbar = () => {
  const [tabTitle, setTabTitle]= useState("")

    return(
        <nav className="nav-container">
        {/* <div className="nav-sys"> //works fine without this, so may be get rid of this line*/}

            <Menu setTabTitle={setTabTitle}/>

            <NavLinks>
              <NavItem > <FavIcon/> </NavItem>
              <NavItem path="/notifications-and-workflow"> <NotifIcon onClick={() => setTabTitle("Notifications and Workflow")}/> </NavItem>
              <NavItem path="/project-management"> <PmIcon onClick={() => setTabTitle("Project Management")}/> </NavItem>
              <NavItem path="/capa"> <CapaIcon onClick={() => setTabTitle("CAPA")}/> </NavItem>
              <NavItem path="/help"> <HelpIcon onClick={() => setTabTitle("Help")}/> </NavItem>
            </NavLinks> 

            <TitleTab tabTitle={tabTitle} setTabTitle={setTabTitle}/>

            
            <NavLinks right={true}>
              <NavItem > <SearchIcon/> </NavItem>
              <NavItem > <AddIcon/> </NavItem>
              <NavItem > <Counter/> </NavItem>
              <NavItem > <HistoryIcon/> </NavItem>
              <NavItem > <OptionsIcon/> </NavItem>
            </NavLinks> 

             

        {/* </div> */}
         </nav>

    );
}

export default Navbar;
