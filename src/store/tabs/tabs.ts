import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TabI } from "../../types/types";
import { RootState } from "../configureStore";

const saveState = (state: TabI[]) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("tabs", serializedState);
  } catch (err) {
    //error handler
  }
};

const loadState: () => TabI[] = () => {
  try {
    const serializedState = localStorage.getItem("tabs");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const initialState: TabI[] = loadState();

interface TabAndHistoryI {
  tab: TabI;
  history: any;
}

const tabsSlice = createSlice({
  name: "tabs",
  initialState: initialState,
  reducers: {
    tabAdd: (tabs, action: PayloadAction<TabAndHistoryI>) => {
      const { tab, history } = action.payload;
      if (tabs.length === 5) return;
      const idx = tabs.findIndex((item) => item.path === tab.path);
      tabs.forEach((item) => (item.active = false));
      if (idx >= 0) {
        tabs[idx].active = true;
      } else {
        const newTab = {
          ...tab,
          active: true,
        };
        tabs.push(newTab);
      }
      history.push(tab.path);
      saveState(tabs);
    },
    tabClick: (tabs, action: PayloadAction<TabAndHistoryI>) => {
      const { tab, history } = action.payload;
      tabs.forEach((item) => {
        if (item.title === tab.title) {
          item.active = true;
        } else item.active = false;
      });
      history.push(tab.path);
      saveState(tabs);
    },
    tabClose: (tabs, action: PayloadAction<TabAndHistoryI>) => {
      const { tab, history } = action.payload;
      if (tab.active) {
        const idx = tabs.findIndex((item) => item.title === tab.title);
        const selectedTab = tabs[idx + 1] || tabs[idx - 1];
        if (!selectedTab) history.push("/");
        else {
          selectedTab.active = true;
          history.push(selectedTab.path);
        }
        tabs.splice(idx, 1);
      } else {
        return tabs.filter((item) => item.title !== tab.title);
      }
      saveState(tabs);
    },
  },
});

export const selectedTab = createSelector(
  (state: RootState) => state,
  (state: RootState) => state.tabs.filter((item) => item.active === true)
);

export const { tabClick, tabClose, tabAdd } = tabsSlice.actions;
export default tabsSlice.reducer;
