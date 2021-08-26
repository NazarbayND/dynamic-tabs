import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { RootState } from "../../store/configureStore";
import {
  loadTabs,
  saveTabs,
  selectedTabSelector,
  tabClick,
  tabClose,
} from "../../store/tabs/tabs";
import { TabI } from "../../types/types";
import Tab from "./Tab";

const Tabs = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const tabs = useSelector((state: RootState) => state.tabs);
  const selectedTab = useSelector((state: RootState) =>
    selectedTabSelector(state)
  );

  useEffect(() => {
    dispatch(loadTabs());
  }, [dispatch]);

  useEffect(() => {
    selectedTab ? history.push(selectedTab.path) : history.push("/");
  }, [selectedTab, history]);
  return (
    <div className="tabs-container">
      {tabs.map((tab: TabI) => {
        return (
          <Tab
            tab={tab}
            key={tab.title}
            onTabClick={() => {
              dispatch(tabClick(tab));
            }}
            onTabClose={() => dispatch(tabClose(tab))}
          />
        );
      })}
    </div>
  );
};

export default Tabs;
