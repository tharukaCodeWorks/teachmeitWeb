import { REGISTER_USER, LOGIN_USER, SET_AUTHENTICATION, UNAUTHENTICATED } from '../actions/types';

const initialState = {
	isAuthenticated: false,
	item: {}
};

export default function(state = initialState, action) {
	switch (action.type) {
		case REGISTER_USER:
			return {
				...state,
				item: action.payload
			};
		case LOGIN_USER:
			return {
				isAuthenticated: action.payload.type === 'authorised',
				item: action.payload.data.user
			};
		case SET_AUTHENTICATION:
			return {
				isAuthenticated: true,
				item: action.payload
			};
		case UNAUTHENTICATED:
			return {
				isAuthenticated: false,
				item: {}
			};
		default:
			return state;
	}
}
