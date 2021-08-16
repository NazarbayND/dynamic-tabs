import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as SearchIcon } from "../icons/search.svg";

export default function Search({
  isSearchOpen,
  setIsSearchOpen,
  searchContent,
}) {
  const [searchDropdown, setSearchDropdown] = useState(isSearchOpen);
  /*  const showSearch1 = () => {setSearchDropdown(!searchDropdown);
    } */
  const showSearch = () => setIsSearchOpen(!isSearchOpen);

  /*   useEffect(() => {
   showSearch1()
    console.log("isSearchOpen changed to " + isSearchOpen)
    console.log("searchDropdown is : " + searchDropdown)

  }, [isSearchOpen])  */

  return (
    <>
      <li
        className={isSearchOpen ? "nav-item search active" : "nav-item search"}
        onClick={showSearch}
      >
        {/* <li className="nav-item search" style={{borderLeft: "1px solid white"}}> */}
        <Link to="#" style={{ padding: "10px" }}>
          <SearchIcon />
        </Link>
      </li>
      <div className={isSearchOpen ? "srch-container open" : "srch-container"}>
        <div className="search-title"> Search Criteria </div>
        <div className="search-content">
          <div>{searchContent}</div>
        </div>
      </div>
    </>
  );
}
