import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';

// Includes
import ResponsiveContainer from '../includes/navbar';
import Footer from '../includes/footer';
import CourseBar from '../components/CourseBar';

// Components
import Carousel from '../components/carousel';
import { Responsive } from 'semantic-ui-react';

class DesktopContainer extends Component {
	render() {
		const { authenticated } = this.props;
		return (
			<Responsive minWidth={Responsive.onlyTablet.minWidth}>
				<div style={{ height: '100%' }}>{authenticated.isAuthenticated ? <CourseBar /> : null}</div>
			</Responsive>
		);
	}
}

class MobileContainer extends Component {
	render() {
		const { authenticated } = this.props;
		return <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>Mobile</Responsive>;
	}
}

class HomepageLayout extends Component {
	componentDidMount() {
		document.title = 'Teachmeit';
	}

	render() {
		const { authenticated } = this.props;

		return (
			<ResponsiveContainer>
				<DesktopContainer authenticated={authenticated} />
				<MobileContainer authenticated={authenticated} />
				{!authenticated.isAuthenticated ? <Footer /> : null}
			</ResponsiveContainer>
		);
	}
}

function mapStateToProps(state) {
	return {
		authenticated: state.auth
	};
}
export default connect(mapStateToProps)(HomepageLayout);
