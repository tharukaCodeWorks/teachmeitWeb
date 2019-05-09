import React, { Component } from 'react';
import './css/CourseBar.css';
import { List, Image, Responsive } from 'semantic-ui-react';

// Desktop container
class DesktopContainer extends Component {
	render() {
		return (
			<Responsive {...Responsive.onlyComputer}>
				<div className="course-bar-desktop">
					<h3>My Courses</h3>
					<List celled divided selection size="tiny" animated verticalAlign="middle">
						<List.Item>
							<Image
								rounded
								size="tiny"
								src="https://images.unsplash.com/photo-1482176012301-7421d86c74bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
							/>
							<List.Content>
								<List.Header>HTML for A/L</List.Header>
								<List.Description>Computer & Programming</List.Description>
								<List.Description>Tharuka Lakshn</List.Description>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/christian.jpg" />
							<List.Content>
								<List.Header>Python for A/L</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg" />
							<List.Content>
								<List.Header>Daniel</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
							<List.Content>
								<List.Header>HTML for A/L</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/christian.jpg" />
							<List.Content>
								<List.Header>Python for A/L</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg" />
							<List.Content>
								<List.Header>Daniel</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
							<List.Content>
								<List.Header>HTML for A/L</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/christian.jpg" />
							<List.Content>
								<List.Header>Python for A/L</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg" />
							<List.Content>
								<List.Header>Daniel</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
							<List.Content>
								<List.Header>HTML for A/L</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/christian.jpg" />
							<List.Content>
								<List.Header>Python for A/L</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg" />
							<List.Content>
								<List.Header>Daniel</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
							<List.Content>
								<List.Header>HTML for A/L</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/christian.jpg" />
							<List.Content>
								<List.Header>Python for A/L</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg" />
							<List.Content>
								<List.Header>Daniel</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
							<List.Content>
								<List.Header>HTML for A/L</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/christian.jpg" />
							<List.Content>
								<List.Header>Python for A/L</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg" />
							<List.Content>
								<List.Header>Daniel</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
							<List.Content>
								<List.Header>HTML for A/L</List.Header>
								<List.Description>This is description</List.Description>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/christian.jpg" />
							<List.Content>
								<List.Header>Python for A/L</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg" />
							<List.Content>
								<List.Header>Daniel</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
							<List.Content>
								<List.Header>HTML for A/L</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/christian.jpg" />
							<List.Content>
								<List.Header>Python for A/L</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg" />
							<List.Content>
								<List.Header>Daniel</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
							<List.Content>
								<List.Header>HTML for A/L</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/christian.jpg" />
							<List.Content>
								<List.Header>Python for A/L</List.Header>
							</List.Content>
						</List.Item>
						<List.Item>
							<Image avatar src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg" />
							<List.Content>
								<List.Header>Daniel</List.Header>
							</List.Content>
						</List.Item>
					</List>
				</div>
			</Responsive>
		);
	}
}

// Tablet container
class TabletContainer extends Component {
	render() {
		return (
			<Responsive {...Responsive.onlyTablet}>
				<div className="course-bar-tablet">
					<h3>Tablet</h3>
				</div>
			</Responsive>
		);
	}
}

// Responsive Container
const ResponsiveContainer = () => (
	<div>
		<DesktopContainer />
		<TabletContainer />
	</div>
);

export default ResponsiveContainer;
