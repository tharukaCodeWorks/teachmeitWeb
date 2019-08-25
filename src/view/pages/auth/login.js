import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { loginUser, setAuthetication } from '../../../redux/actions/authAction';
import PropTypes from 'prop-types';

// UI Includes
import Navigation from '../../includes/navbar-register-login';
import PrivacyStatements from '../../includes/privacy-statement';

// Utils And Services
import { isEmail, isPassword } from '../../../util/FormValidation';

class LoginComponent extends Component {
	componentDidMount() {
		document.title = 'Log In - Teachmeit';
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.login) {
			this.setState((prevState) => ({
				validate: {
					...prevState.validate,
					credentialInvalid: !nextProps.authenticated
				}
			}));
			this.setState({ isProcessing: false });
		}
	}

	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			validate: {
				email: false,
				password: false,
				credentialInvalid: false
			},
			isProcessing: false
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
		this.formValidation(e);
	}

	onSubmit() {
		if (!this.state.validate.email && !this.state.validate.password) {
			this.setState({ isProcessing: true });
			this.props.loginUser({
				email: this.state.email,
				password: this.state.password
			});
		}
	}

	formValidation = (e) => {
		if (e.target.name === 'email') {
			if (isEmail(e.target.value).data) {
				this.setState((prevState) => ({
					validate: {
						...prevState.validate,
						email: true
					}
				}));
			} else {
				this.setState((prevState) => ({
					validate: {
						...prevState.validate,
						email: false
					}
				}));
			}
		}

		if (e.target.name === 'password') {
			if (isPassword(e.target.value).data) {
				this.setState((prevState) => ({
					validate: {
						...prevState.validate,
						password: true
					}
				}));
			} else {
				this.setState((prevState) => ({
					validate: {
						...prevState.validate,
						password: false
					}
				}));
			}
		}
	};

	render() {
		return (
			<div className="login-form">
				<Navigation />

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
								<Header as="h2" color="green">
									Login
								</Header>
								{this.state.validate.credentialInvalid ? (
									<Message negative>
										<p>Email and password does not match</p>
									</Message>
								) : null}

								<Form.Input
									fluid
									required
									icon="mail"
									iconPosition="left"
									placeholder="E-mail address"
									type="email"
									onChange={this.onChange}
									name="email"
									error={this.state.validate.email}
								/>
								<Form.Input
									fluid
									required
									icon="lock"
									iconPosition="left"
									placeholder="Password"
									type="password"
									onChange={this.onChange}
									name="password"
									error={this.state.validate.password}
								/>
								<Grid textAlign="left">
									<Grid.Column style={{ maxWidth: 450, paddingBottom: 40 }}>
										<Form.Checkbox label="Remember me" horizontalAlign="left" />
									</Grid.Column>
								</Grid>
								<Button
									color="green"
									loading={this.state.isProcessing}
									disabled={this.state.isProcessing}
									fluid
									size="small"
									onClick={this.onSubmit}
								>
									Login
								</Button>
							</Segment>
						</Form>
						<Segment>
							Forgot Password?<Link to="/reset"> Click Here</Link>
						</Segment>

						<PrivacyStatements />
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

// eslint-disable-next-line react/no-typos
LoginComponent.PropTypes = {
	loginUser: PropTypes.func.isRequired,
	loginDetails: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	login: state.auth
});

export default connect(mapStateToProps, { loginUser })(LoginComponent);
