import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { tabClick, tabClose } from "../../store/tabs/tabs";
import { TabI } from "../../types/types";
import Tab from "./Tab";

const Tabs = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const tabs = useSelector((state: RootStateOrAny) => state.tabs);

  return (
    <div className="tabs-container">
      {tabs.map((tab: TabI) => {
        return (
          <Tab
            tab={tab}
            key={tab.title}
            onTabClick={() => {
              dispatch(tabClick({ tab, history }));
            }}
            onTabClose={() => dispatch(tabClose({ tab, history }))}
          />
        );
      })}
    </div>
  );
};

export default Tabs;
