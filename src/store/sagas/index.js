import { fork, all } from "redux-saga/effects";
import watchLogin from "../../containers/Login/sagas";
import watchSignUp from "../../containers/Signup/sagas";
export function* watchSagas() {
  //Combine sagas with
  yield all([watchLogin(), watchSignUp()]);
  // OR
  // yield all([fork(saga1)]);
}
