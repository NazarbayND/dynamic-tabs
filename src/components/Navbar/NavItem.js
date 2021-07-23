import React/* , { useState, useEffect } */ from "react";
import "./navbar.css";

import { Link } from "react-router-dom";

const NavItem = ({children, /* handleClick, */ path="#"}) => {

    return(
        <li className="nav-item">
        <Link to={path} /* onClick={handleClick} ?? */>
          {children}
        </Link>
      </li>

    );
}

export default NavItem;
