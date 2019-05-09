import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// Includes
import Navigation from '../../includes/navbar-register-login';
import PrivacyStatements from '../../includes/privacy-statement';

const reset = () => {
	return (
		<div className="login-form">
			<Navigation />
			{/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
			<style>
				{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}
			</style>
			<Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
				<Grid.Column style={{ maxWidth: 450 }}>
					<Form size="large">
						<Segment style={{ paddingTop: 10, paddingBottom: 40 }}>
							<Header as="h2" color="green" verticalAlign="middle">
								Reset Password
							</Header>
							<Form.Input
								fluid
								icon="mail"
								iconPosition="left"
								placeholder="E-Mail Address"
								type="email"
							/>

							<Button color="green" fluid size="small">
								Reset
							</Button>
						</Segment>
					</Form>
					<Segment>
						Already registered?{' '}
						<Link as={Link} to="/login">
							Log in
						</Link>
					</Segment>
					<PrivacyStatements />
				</Grid.Column>
			</Grid>
		</div>
	);
};

export default reset;
