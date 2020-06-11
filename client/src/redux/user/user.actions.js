import { UserTypes } from "./user.types";

import axios from "axios";

export const registerUser = (user, props, next) => async (dispatch) => {
	dispatch({ type: UserTypes.REGISTER_START });
	return new Promise((resolve, reject) => {
		axios
			.post("/api/users/register", user)
			.then((response) => {
				const token = response.data.token;
				localStorage.setItem("authenticate", token);

				dispatch({
					type: UserTypes.REGISTER_SUCCESS,
					payload: response.data,
				});
				resolve(response);
				// next(props.history.push("/"));
			})
			.catch((err) => {
				dispatch({
					type: UserTypes.REGISTER_FAIL,
					payload: err.response.data,
				});
				reject(err);
			});
	});
};

export const loginUser = (credentials, props) => async (dispatch) => {
	dispatch({ type: UserTypes.LOGIN_START });
	return new Promise((resolve, reject) => {
		axios
			.post("/api/users/login", credentials)
			.then((response) => {
				const token = response.data.token;
				localStorage.setItem("authenticate", token);

				dispatch({
					type: UserTypes.LOGIN_SUCCESS,
					payload: response.data.user,
				});
				resolve(response);
				// props.history.push("/");
			})
			.catch((err) => {
				dispatch({
					type: UserTypes.LOGIN_FAIL,
					payload: err.response,
				});
				reject(err);
			});
	});
};

export const resetState = () => (dispatch) => {
	dispatch({ type: UserTypes.LOGOUT_USER });
	localStorage.removeItem("authenticate");
};
