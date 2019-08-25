import React, { Component } from 'react';
import '../css/splash-screen.css';
import { Image } from 'semantic-ui-react';
import PrivacyStatements from '../includes/privacy-statement';

function LoadingMessage() {
	return (
		<div className="green-back">
			<div className="center-div">
				<Image className="logo-animate" src="/logo_white_mini.png" />
			</div>
			<div className="splash-privacy">Copyright © 2019 Teachmeit.lk</div>
		</div>
	);
}

function withSplashScreen(WrappedComponent) {
	return class extends Component {
		constructor(props) {
			super(props);
			this.state = {
				loading: true
			};
		}

		async componentDidMount() {
			document.title = 'Teachmeit';
			try {
				setTimeout(() => {
					this.setState({
						loading: false
					});
				}, 5000);
			} catch (err) {
				console.log(err);
				this.setState({
					loading: false
				});
			}
		}

		render() {
			// while checking user session, show "loading" message
			if (this.state.loading) return LoadingMessage();

			// otherwise, show the desired route
			return <WrappedComponent {...this.props} />;
		}
	};
}

export default withSplashScreen;
