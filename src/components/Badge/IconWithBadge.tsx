import React from "react";
import { ReactElement } from "react";
import Badge, { badgePosition } from "./Badge";

interface Props {
  icon: ReactElement;
  position: badgePosition;
  count: number;
}

const IconWithBadge: React.FC<Props> = ({ icon, position, count }) => {
  return (
    <div className="icon-badge">
      {icon}
      <Badge count={count} position={position} />
    </div>
  );
};
export default IconWithBadge;
