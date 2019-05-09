import React from 'react';
import { Container, Divider, Grid, Header, Segment, Icon } from 'semantic-ui-react';
import Card from './Card';

const section = () => {
	return (
		<Segment
			basic
			style={{
				background: '#11998e',
				background: '-webkit-linear-gradient(to right, #11998e, #38ef7d)',
				background: 'linear-gradient(to right, #11998e, #38ef7d)',
				padding: '60px'
			}}
			inverted
		>
			<Container>
				<Header textAlign="center" size="huge" content="Top Instructors" inverted />
				<Divider horizontal inverted>
					<Icon name="user" inverted />
				</Divider>

				<Grid verticalAlign="middle" columns={3} stackable stretched>
					<Grid.Column>
						<Card />
					</Grid.Column>
					<Grid.Column>
						<Card />
					</Grid.Column>
					<Grid.Column>
						<Card />
					</Grid.Column>
				</Grid>
			</Container>
		</Segment>
	);
};
