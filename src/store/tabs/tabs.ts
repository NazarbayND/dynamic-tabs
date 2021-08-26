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
const initialState: Array<TabI> = [];

const tabsSlice = createSlice({
  name: "tabs",
  initialState: initialState,
  reducers: {
    loadTabs: () => {},
    tabsLoaded: (state, action) => {
      return action.payload;
    },
    saveTabs: (state, action) => {},
    tabAdd: (tabs, action: PayloadAction<TabI>) => {
      const tab = action.payload;
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
    },
    tabClick: (tabs, action: PayloadAction<TabI>) => {
      const tab = action.payload;
      if (tab.active) return;
      tabs.forEach((item) => {
        if (item.title === tab.title) {
          item.active = true;
        } else item.active = false;
      });
    },

    tabClose: (tabs, action: PayloadAction<TabI>) => {
      const tab = action.payload;
      if (tab.active) {
        const idx = tabs.findIndex((item) => item.title === tab.title);
        const selectedTab = tabs[idx + 1] || tabs[idx - 1];
        if (selectedTab) selectedTab.active = true;

        tabs.splice(idx, 1);
      } else {
        return tabs.filter((item) => item.title !== tab.title);
      }
    },
  },
});

export const selectedTabSelector = createSelector(
  (state: RootState) => state,
  (state: RootState) => state.tabs.filter((item) => item.active === true)[0]
);

export const {
  tabClick,
  tabClose,
  tabAdd,
  loadTabs,
  tabsLoaded,
  saveTabs,
} = tabsSlice.actions;
export default tabsSlice.reducer;
