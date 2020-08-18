import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "./constants";

export const SignUpActionRequest = (credentials) => ({
  type: SIGNUP_REQUEST,
  credentials,
  loadingType: "signUpLoading",
});

export const SignUpActionSuccess = (payload, loadingType) => ({
  type: SIGNUP_SUCCESS,
  payload,
  loadingType,
});

export const SignUpActionFaluire = (error, loadingType) => ({
  type: SIGNUP_FAILURE,
  error,
  loadingType,
});
