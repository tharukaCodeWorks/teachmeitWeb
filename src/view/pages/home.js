import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Icon, Header, Card, Grid, Image, Button, Segment, GridRow, GridColumn } from 'semantic-ui-react';
import TextTruncate from 'react-text-truncate';

// Includes
import ResponsiveContainer from '../includes/navbar';
import Footer from '../includes/footer';


// Components
import Carousel from '../components/carousel';
import { Responsive } from 'semantic-ui-react';
import CategoryList from '../components/CategoryList';

class DesktopContainer extends Component {
	render() {
		const { authenticated } = this.props;
		const topBarStyle = {
			padding: '30px',
			backgroundImage: 'linear-gradient(to right, rgba(255,255,255,1), rgba(0,195,55,0.2))',
		}
		return (
			<Responsive minWidth={Responsive.onlyTablet.minWidth}>
				<div style={{ height: '100%' }}>
					<Header
						as="h1"
						style={{
							width: '100%',
							height: '500px',
							display: 'inline-block',
							backgroundImage: 'linear-gradient(to right, rgba(255,255,255,1), rgba(0,195,55,0.2)), url("images/cover_img.png")',
							backgroundSize: 'cover',
							fontWeight: 'normal',
							marginBottom: 0,		
						}}
					>
						<div style={{ padding: '150px 0px 0px 150px', width: '50%' }}>
							<h1 style={{ color: 'rgba(0, 195, 55, 1)', fontSize: '45px', fontFamily: 'OpenSans' }}>Learn while teaching!</h1>
							<p>100% online learning from the world’s best universities and companies</p>
							<Button style={{ padding: '20px 50px 20px 50px' }} positive>Get Started</Button>
						</div>
					</Header>
					<div style={topBarStyle}>
						<Container>
						<Grid columns='equal'>
							<Grid.Row>
								<Grid.Column>
									<p style={{ fontSize: '20px' }}><Icon name="youtube" size="big"/> Semicolon;</p>
								</Grid.Column>
								<Grid.Column>
									<p style={{ fontSize: '20px' }}><Icon name="facebook" size="big"/> Teachmeit</p>
								</Grid.Column>
								<Grid.Column>
									<p style={{ fontSize: '20px' }}><Icon name="instagram" size="big"/> Teachmeit</p>
								</Grid.Column>
								<Grid.Column>
									<p style={{ fontSize: '20px' }}><Icon name="twitter" size="big"/> Teachmeit</p>
								</Grid.Column>
								<Grid.Column>
									<p style={{ fontSize: '20px' }}><Icon name="facebook" size="big"/> Teachmeit</p>
								</Grid.Column>
							</Grid.Row>
						</Grid>
						</Container>
					</div>
						<Container style={{padding: '10px'}}>						
							<Grid columns='equal'>
								<Grid.Row>
									<Grid.Column>
										<Header as="h2">Computing and ICT</Header>
									</Grid.Column>
								</Grid.Row>
								
								<Grid.Row>
									<Grid.Column>
										<Card>
											<Image src='https://i.udemycdn.com/course/240x135/914296_3670_8.jpg' wrapped ui={false} />
											<Card.Content>
											<Card.Header>
												<TextTruncate
													line={2}
													element="span"
													truncateText="…"
													text="Complete Python Bootcamp: Go from zero to hero in Python 3"
												/>
											</Card.Header>
											<Card.Meta>Jose Portilla</Card.Meta>
												<Card.Description>
													Daniel is a comedian living in Nashville.
												</Card.Description>
											</Card.Content>
										</Card>
									</Grid.Column>
									<Grid.Column>
										<Card>
											<Image src='https://i.udemycdn.com/course/240x135/914296_3670_8.jpg' wrapped ui={false} />
											<Card.Content>
											<Card.Header>Daniel</Card.Header>
											<Card.Meta>Joined in 2016</Card.Meta>
												<Card.Description>
													Daniel is a comedian living in Nashville.
												</Card.Description>
											</Card.Content>
										</Card>
									</Grid.Column>
									<Grid.Column>
										<Card>
											<Image src='https://i.udemycdn.com/course/240x135/857010_8239_2.jpg' wrapped ui={false} />
											<Card.Content>
											<Card.Header>Daniel</Card.Header>
											<Card.Meta>Joined in 2016</Card.Meta>
												<Card.Description>
													Daniel is a comedian living in Nashville.
												</Card.Description>
											</Card.Content>
										</Card>
									</Grid.Column>
									<Grid.Column>
										<Card>
											<Image src='https://i.udemycdn.com/course/240x135/914296_3670_8.jpg' wrapped ui={false} />
											<Card.Content>
											<Card.Header>Daniel</Card.Header>
											<Card.Meta>Joined in 2016</Card.Meta>
												<Card.Description>
													Daniel is a comedian living in Nashville.
												</Card.Description>
											</Card.Content>
										</Card>
									</Grid.Column>
									<Grid.Column>
										<Card style={{ height: '100%' }}>
											<Card.Content>
												More
											</Card.Content>
										</Card>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column>
										<Header as="h2">Sinhala and bhudism</Header>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
										<Grid.Column>
											<Card>
												<Image src='https://i.udemycdn.com/course/240x135/857010_8239_2.jpg' wrapped ui={false} />
												<Card.Content>
												<Card.Header>Daniel</Card.Header>
												<Card.Meta>Joined in 2016</Card.Meta>
													<Card.Description>
														Daniel is a comedian living in Nashville.
													</Card.Description>
												</Card.Content>
											</Card>
										</Grid.Column>
										<Grid.Column>
											<Card>
												<Image src='https://i.udemycdn.com/course/240x135/914296_3670_8.jpg' wrapped ui={false} />
												<Card.Content>
												<Card.Header>Daniel</Card.Header>
												<Card.Meta>Joined in 2016</Card.Meta>
													<Card.Description>
														Daniel is a comedian living in Nashville.
													</Card.Description>
												</Card.Content>
											</Card>
										</Grid.Column>
										<Grid.Column>
											<Card>
												<Image src='https://i.udemycdn.com/course/240x135/914296_3670_8.jpg' wrapped ui={false} />
												<Card.Content>
												<Card.Header>Daniel</Card.Header>
												<Card.Meta>Joined in 2016</Card.Meta>
													<Card.Description>
														Daniel is a comedian living in Nashville.
													</Card.Description>
												</Card.Content>
											</Card>
										</Grid.Column>
										<Grid.Column>
											<Card>
												<Image src='https://i.udemycdn.com/course/240x135/914296_3670_8.jpg' wrapped ui={false} />
												<Card.Content>
												<Card.Header>Daniel</Card.Header>
												<Card.Meta>Joined in 2016</Card.Meta>
													<Card.Description>
														Daniel is a comedian living in Nashville.
													</Card.Description>
												</Card.Content>
											</Card>
										</Grid.Column>
										<Grid.Column>
											<Card style={{ height: '100%' }}>
												<Card.Content>
													More
												</Card.Content>
											</Card>
										</Grid.Column>
								</Grid.Row>
								
								<CategoryList />
							
							</Grid>			
						</Container>
						<div style={{ borderTop: 'solid 8px #4baba7',backgroundImage: 'linear-gradient(60deg, #96deda 0%, #50c9c3 100%), linear-gradient(-225deg, #DFFFCD 0%, #90F9C4 48%, #39F3BB 100%)', minHeight: '300px' , marginTop: '20px',padding: '10px' }}>
							<Container>

							</Container>
						</div>
						<Segment>
							Hello World
						</Segment>
				</div>
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
