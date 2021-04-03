import { UserTypes } from "./user.types";
import jwt from "jsonwebtoken";

const INITIAL_STATE = {
	addingUser: false,
	addedUser: false,
	isLoggedIn: false,
	isLoggingIn: false,
	loggingOut: false,
	loggedOut: true,
	token: null,
	user: {},
	error: null,
	message: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserTypes.REGISTER_START:
			return {
				...state,
				addingUser: true,
				addedUser: false,
			};
		case UserTypes.REGISTER_SUCCESS:
			return {
				...state,
				addingUser: false,
				addedUser: true,
				token: action.payload.token,
				user: jwt.decode(localStorage.getItem("authenticate")),
				isLoggingIn: false,
				isLoggedIn: true,
				loggedOut: false,
				message: action.payload.message,
			};
		case UserTypes.REGISTER_FAIL:
			return {
				...state,
				addedUser: false,
				error: action.payload,
			};
		case UserTypes.LOGIN_START:
			return {
				...state,
				isLoggingIn: true,
				isLoggedIn: false,
				loggedOut: false,
				error: "",
			};
		case UserTypes.LOGIN_SUCCESS:
			return {
				...state,
				token: action.payload.token,
				user: jwt.decode(localStorage.getItem("authenticate")),
				isLoggingIn: false,
				isLoggedIn: true,
				loggingOut: false,
				loggedOut: false,
				message: action.payload.message,
				error: "",
			};
		case UserTypes.LOGIN_FAIL:
			return {
				...state,
				isLoggingIn: false,
				isLoggedIn: false,
				error: action.payload.error,
			};
		case UserTypes.LOGOUT_USER:
			return INITIAL_STATE;

		default:
			return state;
	}
};

export default userReducer;
