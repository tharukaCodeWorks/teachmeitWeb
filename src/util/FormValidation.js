import Validate from 'validate.js';
var constraints;

// Check is password
export const isPassword = (data) => {
	if (data.length >= 8) {
		return { message: '', data: false };
	}
	return { message: 'Please fill the field', data: true };
};

// Check is empty
export const isEmpty = (data) => {
	if (data.length <= 3) {
		return { message: 'Please fill the field', data: true };
	}
	return { message: '', data: false };
};

// Check re-password
export const isCopyPassword = (data) => {
	if (data.password !== data.cpassword) {
		return { message: 'Password not match', data: true };
	}
	return { message: '', data: false };
};

// Check is it email
constraints = {
	from: {
		email: {
			message: "doesn't look like a valid email"
		}
	}
};
export const isEmail = (data) => {
	//console.log(Validate({ from: data }, constraints));
	if (Validate({ from: data }, constraints) === undefined) {
		return { message: '', data: false };
	}
	return { message: "doesn't look like a valid email", data: true };
};
