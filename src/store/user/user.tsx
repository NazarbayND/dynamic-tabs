import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";

const userSlice = createSlice({
  name: "user",
  initialState: {
    error: "",
    email: "",
  },
  reducers: {
    getUser: () => {},
    loginAction: (state, action) => {
      console.log("login action");
    },
    setUser: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
    setToken: (state, action) => {},
    logout: (state, action) => {
      console.log("decrement");
    },
    loginFailed: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  loginAction,
  logout,
  setUser,
  loginFailed,
  getUser,
  setToken,
} = userSlice.actions;
export default userSlice.reducer;
