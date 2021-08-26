import jwtDecode from "jwt-decode";
import { call, fork, put, takeLatest } from "redux-saga/effects";
import { login } from "../../api/auth";
import { loadState, saveState } from "../localStorage";
import { getUser, loginAction, loginFailed, setToken, setUser } from "./user";

function* logIn(action) {
  try {
    const user = action.payload;
    console.log("login saga");
    const response = yield call(login, user.username, user.password);

    if (response) {
      yield put(setUser(jwtDecode(response.data)));
      yield put(setToken(response.data));
    }
  } catch (e) {
    yield put(loginFailed(e.message));
  }
}
function* getUserFromStorage() {
  try {
    console.log("load token saga");
    const authToken = yield call(loadState, "authToken");

    if (authToken) {
      yield put(setUser(jwtDecode(authToken)));
    }
  } catch (e) {
    console.log(e);
  }
}
function* setUserToStorage(action) {
  try {
    const authToken = action.payload;
    yield call(saveState, "authToken", authToken);
    console.log("token saved");
  } catch (e) {
    console.log(e);
  }
}

function* loginWatcher() {
  yield takeLatest(loginAction.type, logIn);
}
function* getUserWatcher() {
  yield takeLatest(getUser.type, getUserFromStorage);
}
function* setUserWatcher() {
  yield takeLatest(setToken.type, setUserToStorage);
}

export function* LoginSaga() {
  yield fork(loginWatcher);
  yield fork(getUserWatcher);
  yield fork(setUserWatcher);
}
