import { createSlice } from "@reduxjs/toolkit";

const tabsSlice = createSlice({
  name: "tabs",
  initialState: [
    {
      title: "test-tab1",
      path: "#",
      active: true,
    },
    {
      title: "test-tab2",
      path: "#",
      active: false,
    },
    {
      title: "test-tab3",
      path: "#",
      active: false,
    },
    {
      title: "test-tab4",
      path: "#",
      active: false,
    },
  ],
  reducers: {
    onTabClick: (tabs, action) => {
      console.log("select");
      tabs.map((tab) => {
        if (tab.title === action.payload.title) {
          tab.active = true;
        } else tab.active = false;
        return tab;
      });
    },
    onTabClose: (tabs, action) => {
      console.log("close");
      return tabs.filter((tab) => {
        return tab.title !== action.payload.title;
      });
    },
  },
});
export const { onTabClick, onTabClose } = tabsSlice.actions;
export default tabsSlice.reducer;
