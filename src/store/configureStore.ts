import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./sagas/logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({ thunk: false }),
  sagaMiddleware,
  logger,
];
const store = configureStore({
  reducer,
  middleware,
});

sagaMiddleware.run(rootSaga);
export default store;
export type RootState = ReturnType<typeof store.getState>;
