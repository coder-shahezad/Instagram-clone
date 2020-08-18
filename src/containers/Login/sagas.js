import { take, put, call, fork } from "redux-saga/effects";
import LoginService from "./service";
import { LOGIN_REQUEST } from "./constants";
import { loginActionSuccess, loginActionFaluire } from "./actions";
import {
  dispatchSnackbarError,
  dispatchSnackbarSuccess,
} from "../../utils/Shared";

const loginCall = (credentails) => {
  return new Promise((resolve, reject) => {
    LoginService.signIn(credentails)
      .then((result) => {
        resolve(result.user);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
function* watchLogin() {
  while (true) {
    const { loadingType, credentials } = yield take(LOGIN_REQUEST);
    try {
      const response = yield call(loginCall, credentials);
      yield put(loginActionSuccess(response, loadingType));
      dispatchSnackbarSuccess("Login successfully.");
    } catch (error) {
      yield put(loginActionFaluire(error.message, loadingType));
      dispatchSnackbarError(error.message);
    }
  }
}

export default function* root() {
  yield fork(watchLogin);
}
