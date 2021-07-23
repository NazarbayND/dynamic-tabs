import React, { useState, useEffect } from "react";
import "./navbar.css";
import { useHistory } from "react-router-dom";
import { ReactComponent as CloseIcon } from "./icons/close.svg";

import { ModulesList } from "./ModulesList";

//Need some other way to store all urls 
const navUrls = 
  [ {path: "/favorites",
  title: "Favorites"},
  {path: "/notifications-and-workflow",
  title: "Notifications and Workflow"},
  {path: "/project-management",
  title: "Project Management"},
  {path: "/capa",
  title: "CAPA"},
  {path: "/help",
  title: "Help"},
  ]

const TitleTab = ({tabTitle, setTabTitle, children}) => {
    const history = useHistory();
    const [isTabOpen, setIsTabOpen] = useState(false)

    const handleClose = (e) => {
        e.preventDefault();
        e.stopPropagation();
        history.push('/');
        setIsTabOpen(false);
        setTabTitle('')
      };


      useEffect(() => {
        if (tabTitle === '') 
        setIsTabOpen(false);
        else
        setIsTabOpen(true);
      }, [tabTitle]) /* ???? */

      useEffect(() => { 
          //Checks if Title tab should be open on reload or accessing directly through url
          ModulesList.forEach((section) => {
            section.module.forEach((module) => {
              if(window.location.pathname === module.path)
              {
                setTabTitle(section.title + '  >  '+ module.title)
                setIsTabOpen(true);
              }
            })
          } )
          
          navUrls.forEach((nav) => {
              if(window.location.pathname === nav.path)
              {
                setTabTitle(nav.title)
                setIsTabOpen(true);
              }
          } )
      }, [])

    return(
    isTabOpen?
    <div className="nav-links tabs" >
      <div className="t-a-b">
      <div className="tab-wrapper">
      <div className="tab-button active">
              <div className="tab"></div>

              <div className="text with-close">
              {tabTitle}
                          
              </div>

              <div className="close">
                  <CloseIcon onClick={(e) => handleClose(e)}/>
              </div>
            
      </div>
      </div>
    </div>
    </div> : null
 );
}

export default TitleTab;
