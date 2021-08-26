import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "dsadsad",
  },
  reducers: {
    loginAction: (state, action) => {},
    loggedIn: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
    logout: (state, action) => {
      console.log("decrement");
    },
  },
});

export const { loginAction, logout, loggedIn } = userSlice.actions;
export default userSlice.reducer;
