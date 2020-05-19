import { UserTypes } from "./user.types";

import axios from "axios";

export const registerUser = (user, props) => (dispatch) => {
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
			props.push("/");
		})
		.catch((err) =>
			dispatch({ type: UserTypes.REGISTER_FAIL, payload: err.response })
		);
};

export const loginUser = (credentials, props) => (dispatch) => {
	dispatch({ type: UserTypes.LOGIN_START });
	axios
		.post("/api/users/login", credentials)
		.then((response) => {
			console.log(response)
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

