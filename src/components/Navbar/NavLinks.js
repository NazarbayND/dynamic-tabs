import React from "react";
import "./navbar.css";


const NavLinks = ({right=false, children}) => {

    return(
      <div className="nav-links">
        <ul className={right? "right" : ""}>
        {children}
        </ul>
      </div>

    );
}

export default NavLinks;
