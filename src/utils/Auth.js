import firebase from '../services/Firebase';
// Service to check authentication for user and to signOut
const Auth = {
	signOut() {
		return firebase.auth().signOut();
	},
	async currentUser() {
		return await new Promise((resolve, reject) => {
			firebase.auth().onAuthStateChanged(user => {
				if (user) {
					resolve(user);
				}
				reject(null);
			});
		});
	},
	isAuth() {
		return sessionStorage.getItem('token');
	}
};
export default Auth;
