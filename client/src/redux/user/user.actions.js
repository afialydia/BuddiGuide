import { UserTypes } from "./user.types";

import axios from "axios";

export const registerUser = (user) => (dispatch) => {
	dispatch({ type: UserTypes.REGISTER_START });
	axios
		.post("/api/users/register", { username: "TobinLow", password: "nancy" })
		.then((response) => {
			const token = response.data.token;
			localStorage.setItem("token", token);
			dispatch({
				type: UserTypes.REGISTER_SUCCESS,
				payload: response.data,
			});
		})
		.catch((err) =>
			dispatch({ type: UserTypes.REGISTER_FAIL, payload: err.response })
		);
};

export const loginUser = (credentials, props) => (dispatch) => {
	console.log("creds", credentials);
	console.log("propz", props);
	dispatch({ type: UserTypes.LOGIN_START });
	axios
		.post("/api/users/login", { username: "TobinLow", password: "nancy" })
		//  credentials, {
		// 	headers: credentials
		// })

		.then((response) => {
			const token = response.data.token;
			localStorage.setItem("token", token);
			dispatch({
				type: UserTypes.LOGIN_SUCCESS,
				payload: response.data,
			});
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
