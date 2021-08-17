import React from "react";
//icons
import { NotificationsIcon } from "../../assets/icons";
//components
import IconContainer from "../IconComponent/IconContainer";
import IconWithBadge from "../../components/Badge/IconWithBadge";
//types
import { badgePosition } from "../../components/Badge/Badge";

const Notifications = () => {
  return (
    <IconContainer>
      <IconWithBadge
        icon={
          <IconWithBadge
            icon={<NotificationsIcon />}
            position={badgePosition.topLeft}
            count={1}
          />
        }
        position={badgePosition.topRight}
        count={9}
      />
    </IconContainer>
  );
};

export default Notifications;
