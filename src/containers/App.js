import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Router } from 'react-router-dom';
import history from '../routes/History';
import Routes from '../routes/Routes';
import { IntlProvider } from 'react-intl';
import messages from '../assets/Local/messages';
import { MaterialSnackbar } from '../components/Snackbar/Snackbar';
import Loader from '../components/Loader/Loader';
import './App.scss';
import { connect } from 'react-redux';
import Auth from '../utils/Auth';
class App extends React.Component {
	componentDidMount() {
		Auth.currentUser()
			.then(user => {
				sessionStorage.setItem('token', user.refreshToken);
				history.push('/');
			})
			.catch(error => {
				console.log('error', error);
				history.push('/login');
			});
	}
	// App contains routes and also wrapped with snackbar and intl for localization
	render() {
		const { lang, loading } = this.props;
		return (
			<IntlProvider locale={lang} messages={messages[lang]}>
				<div
					className={lang === 'ar' ? 'rtl' : 'ltr'}
					dir={lang === 'ar' ? 'rtl' : 'ltr'}>
					{loading ? <Loader /> : null}
					<Router history={history}>
						<MaterialSnackbar />
						{Routes}
					</Router>
				</div>
			</IntlProvider>
		);
	}
}

const mapStateToProps = ({ lang, loading }) => ({
	lang,
	loading
});

export default connect(mapStateToProps, null)(App);
