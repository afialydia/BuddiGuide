import { UserTypes } from "./user.types.types";

import axios from "axios";

const registerUser = user => dispatch => {
	dispatch({ type: UserTypes.REGISTER_START });
	axios
		.post("https://hair-care-backend.herokuapp.com/auth/register", user)
    .then(response =>
      {
        const token = response.data.token
        localStorage.setItem('token', token)
			dispatch({
				type: UserTypes.REGISTER_SUCCESS,
				payload: response.data
			})}
		)
		.catch(err =>
			dispatch({ type: UserTypes.REGISTER_FAIL, payload: err.response })
		);
};

const loginUser = (credentials, props) => dispatch => {
	console.log("creds", credentials);
	console.log('propz',props)
	dispatch({ type: UserTypes.LOGIN_START });
	axios
		.post("https://hair-care-backend.herokuapp.com/auth/login", credentials, {
			headers: credentials
		})

		.then(response => {
			const token = response.data.token;
			localStorage.setItem("token", token);
			dispatch({
				type: UserTypes.LOGIN_SUCCESS,
				payload: response.data
			});
			
			props.push('/explore')
		})

		.catch(err =>
			dispatch({ type: UserTypes.LOGIN_FAIL, payload: err.response })
		);
};

