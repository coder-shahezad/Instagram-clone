import React from "react";
import { loginActionRequest } from "./actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LoginComponent from "./LoginComponent";
import { useHistory } from "react-router";

const Login = (props) => {
  const history = useHistory();
  React.useEffect(() => {
    if (props.currentUser) {
      console.log("React.useEffect(() => {=====");
      sessionStorage.setItem("token", props.currentUser.refreshToken);
      history.push("/");
    }
  });
  const onSubmit = async (values) => {
    props.actions.loginActionRequest(values);
  };
  return <LoginComponent {...props} onSubmit={onSubmit} />;
};

const mapStateToProps = (state) => ({
  currentUser: state.Login.currentUser,
  loginLoading: state.Login.loginLoading,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      loginActionRequest,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
