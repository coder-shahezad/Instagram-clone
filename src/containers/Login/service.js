import firebase from "../../services/Firebase";

const LoginService = {
  signIn: async ({ email, password }) => {
    return await firebase.auth().signInWithEmailAndPassword(email, password);
  },
};
export default LoginService;
