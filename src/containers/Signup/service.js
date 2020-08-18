import firebase from "../../services/Firebase";

const SignUpService = {
  signUp: async ({ email, password }) => {
    return await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
  },
};
export default SignUpService;
