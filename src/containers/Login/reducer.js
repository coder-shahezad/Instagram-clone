import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./constants";

const INITIAL_STATE = {
  loginLoading: false,
  currentUser: null,
};

const Login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loginLoading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginLoading: false,
      };
    default:
      return state;
  }
};

export default Login;
