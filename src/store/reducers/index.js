import { combineReducers } from "redux";
import lang from "./Lang";
import loader from "./Loader";
import snackbar from "./Snackbar";
import Login from "../../containers/Login/reducer";
import SignUp from "../../containers/Signup/reducer";

export default combineReducers({
  lang,
  loader,
  snackbar,
  Login,
  SignUp,
});
