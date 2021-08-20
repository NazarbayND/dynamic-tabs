import React from "react";
import withIconContainer from "../IconComponent/withIconContainer";

const Timer = ({ ...rest }) => {
  return <div className="timer">:00</div>;
};

export default withIconContainer(Timer);
