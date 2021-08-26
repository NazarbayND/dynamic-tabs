import jwtDecode from "jwt-decode";
import { call, put, takeEvery } from "redux-saga/effects";
import { login } from "../../../api/auth";
import { loggedIn, loginAction } from "../../user/user";

function* logIn(action) {
  try {
    const user = action.payload;
    console.log(user);
    const response = yield call(login, user.username, user.password);

    if (response) {
      yield put(loggedIn(jwtDecode(response.data)));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* LoginSaga() {
  yield takeEvery(loginAction.type, logIn);
}
