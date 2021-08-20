import React, { useState } from "react";

function withDropdown(Component, Content) {
  const WithDropdown = (props) => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
      <div
        className="dropdown-container"
        onMouseLeave={() => setShowDropdown(false)}
      >
        <div
          className="dropdown__main"
          onMouseEnter={() => setShowDropdown(true)}
        >
          <Component setShowDropDown={setShowDropdown} {...props} />
        </div>
        <div className={`dropdown__content top ${showDropdown ? "open" : ""}`}>
          <Content />
        </div>
      </div>
    );
  };
  return WithDropdown;
}

export default withDropdown;
