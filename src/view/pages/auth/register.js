import React, { Component } from 'react';
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { registerUser } from '../../../redux/actions/authAction';
import PropTypes from 'prop-types';

// Includes
import Navigation from '../../includes/navbar-register-login';
import PrivacyStatements from '../../includes/privacy-statement';

// Utils
// Utils And Services
import { isEmail, isPassword, isEmpty, isCopyPassword } from '../../../util/FormValidation';

class RegisterComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {
				first_name: '',
				last_name: '',
				password: '',
				c_password: '',
				email: ''
			},
			validation: {
				first_name: false,
				last_name: false,
				password: false,
				c_password: false,
				email: false,
				agrement: false
			},
			isProcessing: false,
			response: {
				recieved: false,
				responseType: '',
				responseMessage: ''
			}
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onCheckChange = this.onCheckChange.bind(this);
	}

	componentDidMount() {
		document.title = 'Register - Teachmeit';
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.register) {
			let formCopy = JSON.parse(JSON.stringify(this.state.response));
			formCopy.recieved = true;
			formCopy.responseType = nextProps.register.type;
			formCopy.responseMessage = nextProps.register.data.message;
			console.log(formCopy);
			this.setState({
				response: formCopy
			});
		}
		this.setState({ isProcessing: false });
	}

	onSubmit() {
		if (
			!this.state.validation.first_name &&
			!this.state.validation.last_name &&
			!this.state.validation.email &&
			!this.state.validation.password &&
			!this.state.validation.c_password
		) {
			if(this.state.validation.agrement){
				this.setState({ isProcessing: true });
				this.props.registerUser({
					name: this.state.form.first_name + ' ' + this.state.form.last_name,
					email: this.state.form.email,
					password: this.state.form.password,
					c_password: this.state.form.c_password
				});
			}
			
		}
	}

	onChange(e) {
		let formCopy = JSON.parse(JSON.stringify(this.state.form));
		formCopy[e.target.name] = e.target.value;
		this.setState({
			form: formCopy
		});

		this.formValidation(e);
	}

	onCheckChange = () => {
		let formCopy = JSON.parse(JSON.stringify(this.state.validation));
		formCopy.agrement = !this.state.validation.agrement;
		this.setState({
			validation: formCopy
		});
	};

	formValidation(e) {
		switch (e.target.name) {
			case 'email':
				if (isEmail(e.target.value).data) {
					let formCopy = JSON.parse(JSON.stringify(this.state.validation));
					formCopy[e.target.name] = true;
					this.setState({
						validation: formCopy
					});
				} else {
					let formCopy = JSON.parse(JSON.stringify(this.state.validation));
					formCopy[e.target.name] = false;
					this.setState({
						validation: formCopy
					});
				}
				break;
			case 'first_name':
				if (isEmpty(e.target.value).data) {
					let formCopy = JSON.parse(JSON.stringify(this.state.validation));
					formCopy[e.target.name] = true;
					this.setState({
						validation: formCopy
					});
				} else {
					let formCopy = JSON.parse(JSON.stringify(this.state.validation));
					formCopy[e.target.name] = false;
					this.setState({
						validation: formCopy
					});
				}
				break;
			case 'last_name':
				if (isEmpty(e.target.value).data) {
					let formCopy = JSON.parse(JSON.stringify(this.state.validation));
					formCopy[e.target.name] = true;
					this.setState({
						validation: formCopy
					});
				} else {
					let formCopy = JSON.parse(JSON.stringify(this.state.validation));
					formCopy[e.target.name] = false;
					this.setState({
						validation: formCopy
					});
				}
				break;
			case 'password':
				if (isPassword(e.target.value).data) {
					let formCopy = JSON.parse(JSON.stringify(this.state.validation));
					formCopy[e.target.name] = true;
					this.setState({
						validation: formCopy
					});
				} else {
					let formCopy = JSON.parse(JSON.stringify(this.state.validation));
					formCopy[e.target.name] = false;
					this.setState({
						validation: formCopy
					});
				}
				break;
			case 'c_password':
				if (isCopyPassword({ password: this.state.form.password, cpassword: e.target.value }).data) {
					let formCopy = JSON.parse(JSON.stringify(this.state.validation));
					formCopy[e.target.name] = true;
					this.setState({
						validation: formCopy
					});
				} else {
					let formCopy = JSON.parse(JSON.stringify(this.state.validation));
					formCopy[e.target.name] = false;
					this.setState({
						validation: formCopy
					});
				}
				break;
			default:
				break;
		}
	}

	render() {
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
									Register
								</Header>
								{this.state.response.recieved ? (
									<Message
										negative={this.state.response.responseType === 'email' ? true : false}
										positive={this.state.response.responseType === 'registered' ? true : false}
									>
										<p>{this.state.response.responseMessage}</p>
									</Message>
								) : null}
								<Form.Input
									fluid
									icon="user"
									iconPosition="left"
									placeholder="First Name"
									type="text"
									name="first_name"
									onChange={this.onChange}
									error={this.state.validation.first_name}
									required
								/>
								<Form.Input
									fluid
									icon="user"
									onChange={this.onChange}
									name="last_name"
									iconPosition="left"
									placeholder="Last Name"
									type="text"
									error={this.state.validation.last_name}
									required
								/>
								<Form.Input
									fluid
									icon="mail"
									iconPosition="left"
									placeholder="E-mail address"
									type="email"
									name="email"
									onChange={this.onChange}
									error={this.state.validation.email}
									required
								/>
								<Form.Input
									fluid
									icon="lock"
									iconPosition="left"
									placeholder="Password"
									type="password"
									name="password"
									onChange={this.onChange}
									error={this.state.validation.password}
									required
								/>
								<Form.Input
									fluid
									icon="lock"
									iconPosition="left"
									placeholder="Re-Password"
									type="password"
									name="c_password"
									onChange={this.onChange}
									error={this.state.validation.c_password}
									required
								/>
								<Grid textAlign="left">
									<Grid.Column style={{ maxWidth: 450, paddingBottom: 40 }}>
										<Form.Checkbox
											required
											name="agrement"
											error={this.state.validation.agrement}
											left
											label="I agree to the Terms and Conditions"
											onChange={this.onCheckChange}
										/>
									</Grid.Column>
								</Grid>

								<Button
									color="green"
									fluid
									size="small"
									onClick={this.onSubmit}
									loading={this.state.isProcessing}
									disabled={this.state.isProcessing}
								>
									Register
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
	}
}

// eslint-disable-next-line react/no-typos
RegisterComponent.PropTypes = {
	registerUser: PropTypes.func.isRequired,
	registerDetails: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	register: state.auth.item
});
export default connect(mapStateToProps, { registerUser })(RegisterComponent);
