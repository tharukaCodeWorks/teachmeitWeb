import React, { Component } from 'react';
import { Container, Grid, Header, List, Segment, Image, Responsive } from 'semantic-ui-react';

const getWidth = () => {
	const isSSR = typeof window === 'undefined';

	return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
	render() {
		return (
			<Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
				<Segment inverted vertical style={{ padding: '2em 0em' }}>
					<Container>
						<Grid divided inverted stackable>
							<Grid.Row>
								<Grid.Column width={3}>
									<Header inverted as="h4" content="About" />
									<List link inverted>
										<List.Item as="a">About Us</List.Item>
										<List.Item as="a">Contact Us</List.Item>
										<List.Item as="a">FAQ</List.Item>
										<List.Item as="a">Privacy Policy</List.Item>
									</List>
								</Grid.Column>
								<Grid.Column width={3}>
									<Header inverted as="h4" content="Services" />
									<List link inverted>
										<List.Item as="a">Online Courses</List.Item>
										<List.Item as="a">Online Examination</List.Item>
										<List.Item as="a">How To Access</List.Item>
									</List>
								</Grid.Column>
								<Grid.Column width={7}>
									<Header as="h4" inverted>
										Who we are?
									</Header>
									<p>
										Extra space for a call to action inside the footer that could help re-engage
										users.
									</p>
									<Image src="/img/payhere_short_banner_dark.png" size="small" />
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Container>
				</Segment>
			</Responsive>
		);
	}
}

class MobileContainer extends Component {
	render() {
		return (
			<Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
				<Segment inverted vertical>
					<Container textAlign="center">Copyright © 2019 Teachmeit.lk</Container>
				</Segment>
			</Responsive>
		);
	}
}

const responsiveContainer = () => {
	return (
		<div>
			<DesktopContainer />
			<MobileContainer />
		</div>
	);
};
export default responsiveContainer;
