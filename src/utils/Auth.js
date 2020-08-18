import firebase from "../services/Firebase";
import { useHistory } from "react-router";
// Service to check authentication for user and to signOut
const Auth = {
  signOut() {
    sessionStorage.clear();
    firebase.auth().signOut();
  },
  isAuth() {
    return sessionStorage.getItem("token");
  },
};
export default Auth;
