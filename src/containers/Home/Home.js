import React from 'react';
import messages from './../../assets/Local/messages';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { NxButton } from '../../components/Controls/NxButton/NxButton';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Auth from '../../utils/Auth';

class Home extends React.Component {
	componentDidMount() {
		Auth.currentUser()
			.then(user => {
				console.log(user);
			})
			.catch(error => {
				console.log('error', error);
			});
	}

	render() {
		const { lang } = this.props;
		const message = messages[lang];
		const clickMe = () => {
			this.props.history.push('/contact');
		};
		return (
			<div className='container my-5'>
				<p>{message.home.content}</p>
				<NxButton type='button' text='Click Me' handleClick={clickMe} />
				<Fab color='primary' aria-label='add'>
					<AddIcon />
				</Fab>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		lang: state.lang
	};
};

export default connect(mapStateToProps, null)(Home);
