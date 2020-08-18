import firebase from "../../services/Firebase";

const signIn = async ({ email, password }) => {
  return await firebase.auth().signInWithCredential({ email, password });
};

const signUp = async ({ email, password }) => {
  return await firebase
    .auth()
    .createUserWithEmailAndPassword({ email, password });
};

export default {
  signIn,
  signUp,
};
