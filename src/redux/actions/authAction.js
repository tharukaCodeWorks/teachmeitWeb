import { REGISTER_USER, LOGIN_USER, SET_AUTHENTICATION, UNAUTHENTICATED } from './types';
import Axios from 'axios';
import SetAuthorizationToken from '../../util/auth/SetAuthorizationToken';

export const setAuthetication = (data) => (dispatch) => {
	// alert(localStorage.jwtToken);
	dispatch({
		type: SET_AUTHENTICATION,
		payload: data
	});
};

export const loginUser = (loginData) => (dispatch) => {
	Axios.post('http://127.0.0.1:8000/api/login', loginData)
		.then((res) => {
			if (res.data.type === 'authorised') {
				const token = res.data.data.token;
				localStorage.setItem('jwtToken', token);
				localStorage.setItem('user', JSON.stringify(res.data.data.user));
				SetAuthorizationToken(token);
				setAuthetication(res.data.data.user);
			}

			dispatch({
				type: LOGIN_USER,
				payload: res.data
			});
		})
		.catch((error) => {
			if (error.response.status === 401) {
				dispatch({
					type: LOGIN_USER,
					payload: error.response.data
				});
			}
		});
};

export const registerUser = (registerUser) => (dispatch) => {
	Axios.post('http://127.0.0.1:8000/api/register', registerUser)
		.then((res) => {
			if (res.data.type === 'registered') {
			}
			dispatch({
				type: REGISTER_USER,
				payload: res.data
			});
		})
		.catch((error) => {
			if (error.response.status === 401) {
				dispatch({
					type: REGISTER_USER,
					payload: error.response.data
				});
			} else if (error.response.status === 406) {
			}
		});
};

export const signOutAction = () => (dispatch) => {
	localStorage.clear();
	dispatch({
		type: UNAUTHENTICATED,
		payload: {}
	});
};
