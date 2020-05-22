import { UserTypes } from "./user.types";

import axios from "axios";

export const registerUser = (user, props, next) => async (dispatch) => {
	dispatch({ type: UserTypes.REGISTER_START });
	axios
		.post("/api/users/register", user)
		.then((response) => {
			const token = response.data.token;
			localStorage.setItem("authenticate", token);
			dispatch({
				type: UserTypes.REGISTER_SUCCESS,
				payload: response.data,
			});
			// next();
		})
		.catch((err) =>
			dispatch({
				type: UserTypes.REGISTER_FAIL,
				payload: err.response.data,
			})
		);
};

export const loginUser = (credentials, props) => (dispatch) => {
	dispatch({ type: UserTypes.LOGIN_START });
	axios
		.post("/api/users/login", credentials)
		.then((response) => {
			const token = response.data.token;
			localStorage.setItem("authenticate", token);
			dispatch({
				type: UserTypes.LOGIN_SUCCESS,
				payload: response.data.user,
			});
		})
		.catch((err) =>
			dispatch({ type: UserTypes.LOGIN_FAIL, payload: err.response })
		);
};

export const resetState = () => (dispatch) => {
	dispatch({ type: UserTypes.LOGOUT_USER });
};
