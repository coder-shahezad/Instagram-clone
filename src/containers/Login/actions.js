import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./constants";

export const loginActionRequest = (credentials) => ({
  type: LOGIN_REQUEST,
  credentials,
  loadingType: "loginLoading",
});

export const loginActionSuccess = (payload, loadingType) => ({
  type: LOGIN_SUCCESS,
  payload,
  loadingType,
});

export const loginActionFaluire = (error, loadingType) => ({
  type: LOGIN_FAILURE,
  error,
  loadingType,
});
