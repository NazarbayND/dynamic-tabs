import React, { useState, FC, ReactElement } from "react";
//style
import "./style.scss";

interface Props {
  main: ReactElement;
  content: ReactElement;
  position: string;
  style?: React.CSSProperties;
  mainStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
}

const Dropdown: FC<Props> = ({
  main,
  content,
  position,
  style,
  mainStyle,
  contentStyle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="dropdown-container"
      onMouseLeave={() => setIsOpen(false)}
      style={style}
    >
      <div
        className="dropdown__main"
        onMouseEnter={() => setIsOpen(true)}
        style={mainStyle}
      >
        {main}
      </div>
      <div
        className={`dropdown__content ${position} ${isOpen ? "open" : ""}`}
        style={contentStyle}
      >
        {content}
      </div>
    </div>
  );
};

export default Dropdown;
