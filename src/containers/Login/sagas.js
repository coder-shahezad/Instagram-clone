import { take, put, call, fork } from 'redux-saga/effects';
import LoginService from './service';
import { LOGIN_REQUEST, LOGOUT_REQUEST } from './constants';
import {
	loginActionSuccess,
	loginActionFailure,
	logoutActionSuccess,
	logoutActionFailure
} from './actions';
import {
	dispatchSnackbarError,
	dispatchSnackbarSuccess
} from '../../utils/Shared';
import Auth from '../../utils/Auth';

const loginCall = credentails => {
	return new Promise((resolve, reject) => {
		LoginService.signIn(credentails)
			.then(result => {
				resolve(result.user);
			})
			.catch(error => {
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
			dispatchSnackbarSuccess('Login successfully.');
		} catch (error) {
			yield put(loginActionFailure(error.message, loadingType));
			dispatchSnackbarError(error.message);
		}
	}
}

const logoutCall = () => {
	return new Promise((resolve, reject) => {
		Auth.signOut()
			.then(result => {
				sessionStorage.clear();
				resolve(result);
			})
			.catch(error => {
				reject(error);
			});
	});
};

function* watchLogout() {
	while (true) {
		const { loadingType } = yield take(LOGOUT_REQUEST);
		try {
			const response = yield call(logoutCall);
			yield put(logoutActionSuccess(response, loadingType));
			dispatchSnackbarSuccess('Logout successfully.');
		} catch (error) {
			yield put(logoutActionFailure(error.message, loadingType));
			dispatchSnackbarError(error.message);
		}
	}
}

export default function* root() {
	yield fork(watchLogin);
	yield fork(watchLogout);
}
