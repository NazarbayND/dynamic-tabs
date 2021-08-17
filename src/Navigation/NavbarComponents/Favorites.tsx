import React from "react";
//icons
import { FavoritesIcon } from "../../assets/icons";
//components
import IconContainer from "../IconComponent/IconContainer";
import Dropdown from "../../components/Dropdown/Dropdown";
import MenuSubList from "../Menu/MenuSubList";

const FavoritesData = [
  {
    title: "Warehouse Management System (WMS)",
    path: "/wms",
  },
  {
    title: "Supplier and Contacts",
    path: "/supplier-contacts",
  },
  {
    title: "Work Order and Scheduling (WO)",
    path: "/wo",
  },
  {
    title: "Material planning and procurement (MRP/PO)",
    path: "/mrp-po",
  },
  {
    title: "Statistical Quality Analytics (SQA)",
    path: "/sqa",
  },
];

const Favorites = () => {
  return (
    <Dropdown
      main={
        <IconContainer>
          <FavoritesIcon />
        </IconContainer>
      }
      content={<MenuSubList modules={FavoritesData} />}
      position="top"
    />
  );
};

export default Favorites;
