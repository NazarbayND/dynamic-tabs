import React from "react";
import Badge, { position } from "./Badge";

const IconWithBadge = ({ children, position, count }) => {
  return (
    <div className="icon-badge">
      {children}
      <Badge count={count} position={position} />
    </div>
  );
};
export default IconWithBadge;
