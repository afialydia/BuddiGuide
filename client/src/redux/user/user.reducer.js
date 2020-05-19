import { UserTypes } from "./user.types";
import jwt from "jsonwebtoken";

const INITIAL_STATE = {
	addingUser: false,
	addedUser: false,
	isLoggedIn: false,
	isLoggingIn: false,
	loggingOut: false,
	loggedOut: false,
	token: null,
	user: {},
	error: "",
};

const user_reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserTypes.REGISTER_START:
			return {
				...state,
				addingUser: true,
				addedUser: false,
				error: "",
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
				error: "",
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
				error: "",
			};
		case UserTypes.LOGIN_SUCCESS:
			return {
				...state,
				token: action.payload.token,
				user: jwt.decode(localStorage.getItem("authenticate")),
				isLoggingIn: false,
				isLoggedIn: true,
				error: "",
			};
		case UserTypes.LOGIN_FAIL:
			return {
				...state,
				isLoggingIn: false,
				isLoggedIn: false,
				error: action.payload,
			};
		case UserTypes.LOGOUT_START:
			return {
				...state,
				loggingOut: true,
				loggedOut: false,
				error: "",
			};
		case UserTypes.LOGOUT_SUCCESS:
			return {
				...state,
				loggingOut: false,
				loggedOut: true,
				user: action.payload,
				error: "",
			};
		case UserTypes.LOGOUT_FAIL:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default user_reducer;
