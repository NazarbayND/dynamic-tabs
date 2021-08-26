import { call, fork, put, takeEvery, takeLatest } from "redux-saga/effects";
import { loadState, saveState } from "../localStorage";
import { loadTabs, saveTabs, tabsLoaded } from "./tabs";

function* loadTabsFromStorage() {
  try {
    const tabs = yield call(loadState, "tabs");

    if (tabs.length > 0) {
      yield put(tabsLoaded(tabs));
    }
  } catch (e) {
    console.log(e);
  }
}
function* loadTabsWatcher() {
  yield takeEvery(loadTabs.type, loadTabsFromStorage);
}

function* saveTabsToStorage(action) {
  try {
    yield call(saveState, "tabs", action.payload);
  } catch (e) {
    console.log(e);
  }
}
function* saveTabsWatcher() {
  yield takeLatest(saveTabs.type, saveTabsToStorage);
}
export function* tabsSaga() {
  yield fork(loadTabsWatcher);
  yield fork(saveTabsWatcher);
}
