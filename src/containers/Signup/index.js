import React from "react";
import SignUpComponent from "./SignUpComponent";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { SignUpActionRequest } from "./actions";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
  const history = useHistory();
  React.useEffect(() => {
    if (props.currentUser) {
      sessionStorage.setItem("token", props.currentUser.refreshToken);
      history.push("/");
    }
  });
  const onSubmit = async (credentails) => {
    props.actions.SignUpActionRequest(credentails);
  };
  return <SignUpComponent {...props} onSubmit={onSubmit} />;
};

const mapStateToProps = (state) => ({
  currentUser: state.SignUp.currentUser,
  signUpLoading: state.SignUp.signUpLoading,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      SignUpActionRequest,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
