import { signOutAction } from '../../redux/actions/authAction';
import { connect } from 'react-redux';
import React, { Component } from 'react';

class signOut extends Component {
	componentDidMount() {
		this.props.signOutAction();
	}
	render() {
		return <p>Signing out</p>;
	}
}

export default connect(null, { signOutAction })(signOut);
