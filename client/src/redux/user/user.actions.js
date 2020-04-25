import { UserTypes } from "./user.types";

import axios from "axios";

export const registerUser = (user, props) => (dispatch) => {
	dispatch({ type: UserTypes.REGISTER_START });
	console.log("user", user);
	axios
		.post("/api/users/register", user)
		.then((response) => {
			const token = response.data.token;
			localStorage.setItem("token", token);
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
			const token = response.data.token;
			localStorage.setItem("token", token);
			dispatch({
				type: UserTypes.LOGIN_SUCCESS,
				payload: response.data,
			});
			props.push("/");
		})

		.catch((err) =>
			dispatch({ type: UserTypes.LOGIN_FAIL, payload: err.response })
		);
};

const setUser = (user) => (dispatch) => {
	console.log("user", user);
	dispatch({ type: UserTypes.SET_USER_START });
	axios
		.get("/api/users/1")
		// .delete("https://hair-care-backend.herokuapp.com/auth/SET_USER", user)
		.then((response) => {
			dispatch({
				type: UserTypes.SET_USER_SUCCESS,
				payload: response.data,
			});
		})
		.then(() => this.props.history.push("/login"))

		.catch((err) =>
			dispatch({ type: UserTypes.SET_USER_FAIL, payload: err.response })
		);
};
