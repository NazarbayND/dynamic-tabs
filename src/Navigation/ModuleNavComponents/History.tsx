import React from "react";
import { HistoryIcon } from "../../assets/icons";
import Card from "../../components/Cards/Card";
import LeftDropdown from "./LeftDropdown";

const History = () => {
  return (
    <LeftDropdown
      Icon={HistoryIcon}
      content={<Card content={"test history content"} />}
    />
  );
};

export default History;
