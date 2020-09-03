import React from 'react';
import { loginActionRequest } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginComponent from './LoginComponent';
import { useHistory } from 'react-router';
import Auth from '../../utils/Auth';

const Login = props => {
	const history = useHistory();
	React.useEffect(() => {
		Auth.currentUser()
			.then(user => {
				sessionStorage.setItem('token', user.refreshToken);
				history.push('/');
			})
			.catch(error => {
				console.log('error', error);
				history.push('/login');
			});
	}, [props.currentUser]);
	const onSubmit = async values => {
		props.actions.loginActionRequest(values);
	};
	return <LoginComponent {...props} onSubmit={onSubmit} />;
};

const mapStateToProps = state => ({
	currentUser: state.Login.currentUser,
	loginLoading: state.Login.loginLoading
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			loginActionRequest
		},
		dispatch
	)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
