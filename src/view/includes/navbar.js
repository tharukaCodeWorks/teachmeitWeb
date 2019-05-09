import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, Container, Icon, Menu, Responsive, Sidebar, Image, Item, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
	const isSSR = typeof window === 'undefined';

	return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */

class DesktopContainer extends Component {
	state = {};

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { children, authenticated } = this.props;
		const { activeItem } = this.state;

		return (
			<Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
				<Menu fixed="top" inverted secondary color="green" size="mini">
					<Container>
						<Menu.Item verticalAlign>
							<Image src="/logo_white_mini.png" />
						</Menu.Item>
						<Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick}>
							<Button as={Link} to="/downloads" size="small" color="green">
								Home
							</Button>
						</Item>
						<Item name="courses" active={activeItem === 'courses'} onClick={this.handleItemClick}>
							<Button as={Link} to="/downloads" size="small" color="green">
								Courses
							</Button>
						</Item>
						<Item name="downloads" active={activeItem === 'downloads'} onClick={this.handleItemClick}>
							<Button as={Link} to="/downloads" size="small" color="green">
								Downloads
							</Button>
						</Item>

						{authenticated.isAuthenticated ? (
							<Menu.Item position="right">
								<Dropdown
									trigger={
										<span>
											<Image avatar src={authenticated.item.avatar_url} />
											<b>{authenticated.item.name}</b>
										</span>
									}
									item
								>
									<Dropdown.Menu>
										<Dropdown.Item icon="user" text="Profile" />
										<Dropdown.Item icon="setting" text="Settings" />
										<Dropdown.Item as={Link} to="/logout" icon="log out" text="Logout" />
									</Dropdown.Menu>
								</Dropdown>
							</Menu.Item>
						) : (
							<Menu.Item position="right">
								<Item>
									<Button as={Link} to="/login" size="tiny" color="blue">
										Log In
									</Button>
								</Item>
								<Item style={{ marginLeft: '0em' }}>
									<Button as={Link} to="/register" size="tiny" color="green">
										Sign Up
									</Button>
								</Item>
							</Menu.Item>
						)}
					</Container>
				</Menu>
				<div style={{ marginTop: '52px' }}>{children}</div>
			</Responsive>
		);
	}
}

DesktopContainer.propTypes = {
	children: PropTypes.node,
	authenticated: PropTypes.object.isRequired
};

class MobileContainer extends Component {
	state = {};

	handleSidebarHide = () => this.setState({ sidebarOpened: false });

	handleToggle = () => this.setState({ sidebarOpened: true });

	render() {
		const { children, authenticated } = this.props;
		const { sidebarOpened } = this.state;

		return (
			<Responsive as={Sidebar.Pushable} getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
				<Sidebar
					as={Menu}
					animation="push"
					direction="right"
					color="green"
					onHide={this.handleSidebarHide}
					vertical
					visible={sidebarOpened}
				>
					<Menu.Item as="a" active>
						Home
					</Menu.Item>
					<Menu.Item as="a">Work</Menu.Item>
					<Menu.Item as="a">Company</Menu.Item>
					<Menu.Item as="a">Careers</Menu.Item>
					<Menu.Item>
						<Button as={Link} to="/login" size="tiny" color="blue">
							{this.props.authenticated ? 'Logout' : 'Login'}
							{console.log('Mobile: ' + this.props.authenticated)}
						</Button>
					</Menu.Item>
					<Menu.Item style={{ marginLeft: '0em' }}>
						<Button as={Link} to="/register" size="tiny" color="green">
							Sign Up
						</Button>
					</Menu.Item>
				</Sidebar>

				<Sidebar.Pusher dimmed={sidebarOpened}>
					<Menu secondary color="green" fixed="top" inverted size="mini">
						<Menu.Item>
							<Image src="/logo_white_mini.png" />
						</Menu.Item>
						<Menu.Item position="right" onClick={this.handleToggle}>
							<Icon size="large" inverted name="sidebar" />
						</Menu.Item>
					</Menu>
					<div style={{ marginTop: '47px' }}>{children}</div>
				</Sidebar.Pusher>
			</Responsive>
		);
	}
}

MobileContainer.propTypes = {
	children: PropTypes.node,
	authenticated: PropTypes.object.isRequired
};

const ResponsiveContainer = ({ children, authenticated }) => (
	<div>
		<DesktopContainer authenticated={authenticated}>{children}</DesktopContainer>
		<MobileContainer authenticated={authenticated}>{children}</MobileContainer>
	</div>
);

ResponsiveContainer.propTypes = {
	children: PropTypes.node,
	authenticated: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		authenticated: state.auth
	};
}

export default connect(mapStateToProps)(ResponsiveContainer);
