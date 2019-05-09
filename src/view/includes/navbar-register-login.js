import React, { Component } from 'react';
import { Menu, Container, Button, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const getWidth = () => {
	const isSSR = typeof window === 'undefined';

	return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
	render() {
		return (
			<Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
				<Menu size="small" secondary>
					<Container>
						<Menu.Item>
							<Button
								as={Link}
								to="/"
								onPress={() => this.props.navigation.goBack()}
								basic
								circular
								icon="arrow left"
							/>
						</Menu.Item>
					</Container>
				</Menu>
			</Responsive>
		);
	}
}

class MobileContainer extends Component {
	render() {
		return (
			<Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
				<Menu size="small" secondary>
					<Container>
						<Menu.Item position="right">
							<Button
								as={Link}
								to="/"
								onPress={() => this.props.navigation.goBack()}
								basic
								circular
								icon="close"
							/>
						</Menu.Item>
					</Container>
				</Menu>
			</Responsive>
		);
	}
}
const responsiveContent = () => {
	return (
		<div>
			<DesktopContainer />
			<MobileContainer />
		</div>
	);
};

export default responsiveContent;
