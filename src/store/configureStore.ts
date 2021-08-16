import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./sagas/logger";

const store = configureStore({
  reducer,
  middleware: [logger],
});
export default store;
