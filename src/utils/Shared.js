import store from "../store";
import { showSnackbarAction } from "../store/actions/snackbar";
import messages from "../assets/Local/messages";

// To show error message that returned from backend
export function dispatchSnackbarError(message) {
  if (message) {
    store.dispatch(showSnackbarAction(message, "error"));
  }
}
// To show success message after any success request if needed
export function dispatchSnackbarSuccess(message) {
  // const lang = store.getState().language.lang;
  store.dispatch(
    // showSnackbarAction(messages[lang].snackbar[message], "success")
    showSnackbarAction(message, "success")
  );
}
