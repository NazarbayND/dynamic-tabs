import React, { FC, ReactElement } from "react";
//style
import "./style.scss";

interface Props {
  children: ReactElement;
}

const IconContainer: FC<Props> = ({ children }) => {
  return <div className="icon-container">{children}</div>;
};

export default IconContainer;
