import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { onTabClick, onTabClose } from "../../store/tabs/tabs";
import Tab from "./Tab";

const Tabs = () => {
  const dispatch = useDispatch();
  const tabs = useSelector((state: RootStateOrAny) => state.tabs);

  return (
    <div className="tabs-container">
      {tabs.map((tab) => {
        return (
          <Tab
            tab={tab}
            key={tab.title}
            onTabClick={() => {
              dispatch(onTabClick(tab));
            }}
            onTabClose={() => dispatch(onTabClose(tab))}
          />
        );
      })}
    </div>
  );
};

export default Tabs;
