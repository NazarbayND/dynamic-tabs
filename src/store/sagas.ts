import { all } from "redux-saga/effects";
import { LoginSaga } from "./user/userSaga";
import { tabsSaga } from "./tabs/tabsSaga";

export default function* rootSaga() {
  yield all([LoginSaga(), tabsSaga()]);
}
