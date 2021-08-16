import React, { FC } from "react";

import "./Badge.scss";

interface Props {
  position: position;
  count: number;
}

export enum position {
  topRight = "badge--top-right",
  topLeft = "badge--top-left",
  bottomRight = "badge--bottom-right",
  bottomLeft = "badge--bottom-left",
}

const Badge: FC<Props> = ({ position, count }) => {
  return count === 0 ? null : (
    <span className={`badge ${position}`}>{count}</span>
  );
};
export default Badge;
