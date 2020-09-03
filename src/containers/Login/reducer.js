import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT_REQUEST,
	LOGOUT_SUCCESS,
	LOGOUT_FAILURE
} from './constants';

const INITIAL_STATE = {
	loginLoading: false,
	logoutLoading: false,
	currentUser: null
};

const Login = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {
				...state,
				loginLoading: true
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				loginLoading: false
			};
		case LOGIN_FAILURE:
			return {
				...state,
				loginLoading: false
			};
		case LOGOUT_REQUEST:
			return {
				...state,
				logoutLoading: true
			};
		case LOGOUT_SUCCESS:
			return {
				...state,
				currentUser: null,
				logoutLoading: false
			};
		case LOGOUT_FAILURE:
			return {
				...state,
				logoutLoading: false
			};
		default:
			return state;
	}
};

export default Login;
