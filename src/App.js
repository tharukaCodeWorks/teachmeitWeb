import React, { Component } from 'react';
import './view/css/App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';

// Pages
import Register from './view/pages/auth/register';
import Login from './view/pages/auth/login';
import Reset from './view/pages/auth/password-reset';
import Home from './view/pages/home';
import SplashScreen from './view/pages/SplashScreen';
import NewPostListLayout from './view/pages/cources/new/New.post.list'
import { Provider } from 'react-redux';
import TopCourses from './view/pages/cources/top/top-courses';

// Auth
import SetAuthorizationToken from './util/auth/SetAuthorizationToken';

// Util
import Store from './redux/store';

import { setAuthetication } from './redux/actions/authAction';

import requireAuth from './util/auth/requireAuth';
import noRequireAuth from './util/auth/noRequireAuth';
import Signout from './util/auth/Signout';
import Cources from './view/pages/cources/Cources';

class App extends Component {
	render() {
		if (localStorage.jwtToken) {
			SetAuthorizationToken(localStorage.jwtToken);
			Store.dispatch(setAuthetication(JSON.parse(localStorage.user)));
		}
		return (
			<Provider store={Store}>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/logout" component={requireAuth(Signout)} />
						<Route path="/cources" component={requireAuth(Cources)} />
						<Container>
							<Route exact path="/register" component={noRequireAuth(Register)} />
							<Route exact path="/login" component={noRequireAuth(Login)} />
							<Route exact path="/reset" component={noRequireAuth(Reset)} />
						</Container>
					</Switch>
				</Router>
			</Provider>
		);
	}
}

export default SplashScreen(App);
