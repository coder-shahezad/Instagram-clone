import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "./constants";

const INITIAL_STATE = {
  signUpLoading: false,
  currentUser: null,
};

const SignUp = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        signUpLoading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        signUpLoading: false,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signUpLoading: false,
      };
    default:
      return state;
  }
};

export default SignUp;
