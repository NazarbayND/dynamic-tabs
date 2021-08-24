import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./sagas/logger";

const store = configureStore({
  reducer,
  middleware: [logger],
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
