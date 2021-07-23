import React, { useState } from "react";
import "./navbar.css";

import { Link } from "react-router-dom";
import { ModulesList } from "./ModulesList";

import { ReactComponent as MenuIcon } from "./icons/menuIcon.svg";
import { ReactComponent as ExitIcon } from "./icons/exit.svg";
import { ReactComponent as UserIcon } from "./icons/person.svg";

import NavLinks from "./NavLinks";

const Menu = ({setTabTitle}) => {
  const [isMenuOpen, setIsMenuOpen] = useState (false);
  const closeMenu = (title) => {
    setIsMenuOpen (false)
    setTabTitle(title)
  }

  return (
    <NavLinks> 
    <li className="nav-item">
      <MenuIcon
        className="logo-container"
        onMouseEnter={() => {setIsMenuOpen (true)}}
      />
      <div className="dropdown" 
      style={isMenuOpen? {} : {opacity: "0", pointerEvents: "none"}}>
        <ul>
          {ModulesList.map((section) => {
            return (
                <li
                  key={section.title}
                  className="dropdown-item" 
                >
                  <Link to={section.path}>{section.title}</Link>
                  <div className="dropdown second" 
                   style={isMenuOpen? {} : {opacity: "0", pointerEvents: "none"}} >
                    <ul>
                      {section.module.map((module) => {
                        return (
                          <li
                            key={module.path}
                            className="dropdown-item"
                            onClick={() => closeMenu(section.title + '  >  '+ module.title) }
                          >
                            <Link to={module.path}>{module.title}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
            );
          })}

          <li key="user" className="dropdown-item" 
          onClick={() =>{closeMenu('') }}>
            <Link to="/">
                Username <UserIcon />
            </Link>
          </li>

          <li key="logout" className="dropdown-item" 
          onClick={() => {closeMenu('') } }>
            <Link to="#">
                Log Out <ExitIcon />
            </Link>
          </li>
        </ul>
      </div>
    </li>
   </NavLinks>
  );
  
}

export default Menu;
