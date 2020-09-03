import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT_REQUEST,
	LOGOUT_SUCCESS,
	LOGOUT_FAILURE
} from './constants';

export const loginActionRequest = credentials => ({
	type: LOGIN_REQUEST,
	credentials,
	loadingType: 'loginLoading'
});

export const loginActionSuccess = (payload, loadingType) => ({
	type: LOGIN_SUCCESS,
	payload,
	loadingType
});

export const loginActionFailure = (error, loadingType) => ({
	type: LOGIN_FAILURE,
	error,
	loadingType
});

export const logoutActionRequest = () => ({
	type: LOGOUT_REQUEST,
	loadingType: 'logoutLoading'
});

export const logoutActionSuccess = (payload, loadingType) => ({
	type: LOGOUT_SUCCESS,
	payload,
	loadingType
});

export const logoutActionFailure = (payload, loadingType) => ({
	type: LOGOUT_FAILURE,
	payload,
	loadingType
});
