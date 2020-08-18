import { take, put, call, fork } from "redux-saga/effects";
import { SIGNUP_REQUEST } from "./constants";
import { SignUpActionSuccess, SignUpActionFaluire } from "./actions";
import {
  dispatchSnackbarError,
  dispatchSnackbarSuccess,
} from "../../utils/Shared";
import { createBrowserHistory } from "history";
import SignUpService from "./service";

const signUpCall = (credentails) => {
  return new Promise((resolve, reject) => {
    SignUpService.signUp(credentails)
      .then((result) => {
        resolve(result.user);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
function* watchSignUp() {
  while (true) {
    const { loadingType, credentials } = yield take(SIGNUP_REQUEST);
    try {
      const response = yield call(signUpCall, credentials);
      yield put(SignUpActionSuccess(response, loadingType));
      dispatchSnackbarSuccess("Account created successfully.");
      createBrowserHistory().push("/");
    } catch (error) {
      yield put(SignUpActionFaluire(error.message, loadingType));
      dispatchSnackbarError(error.message);
    }
  }
}

export default function* root() {
  yield fork(watchSignUp);
}
