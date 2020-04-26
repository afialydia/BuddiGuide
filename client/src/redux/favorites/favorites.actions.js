import { FavoriteTypes } from "./favorites.types";

import axios from "axios";

export const fetchFaves = user => dispatch => {
	dispatch({ type: FavoriteTypes.GET_FAVES_START });
	axios
		.get(`/api/users/${user}/favorites`)
    .then(response =>
      {
			dispatch({
				type: FavoriteTypes.GET_FAVES_SUCCESS,
				payload: response.data
			})}
		)
		.catch(err =>
			dispatch({ type: FavoriteTypes.GET_FAVES_FAIL, payload: err.response })
		);
};

export const addFave = (props) => dispatch => {
	console.log(props)

	// console.log('propz',props)
	dispatch({ type: FavoriteTypes.POST_FAVE_START });
	axios
		.post(`api/strains/${props.id}`, {user_id:`${props.user_id}`, personal_rating:"Have Not Tried Yet"})
		// , credentials, {
		// 	headers: credentials
		// })

		.then(response => {
			dispatch({
				type: FavoriteTypes.POST_FAVE_SUCCESS,
				payload: response.data.favorite
			});
		})

		.catch(err =>
			dispatch({ type: FavoriteTypes.POST_FAVE_FAIL, payload: err.response })
		);
};

export const fetchFave = (credentials, props) => dispatch => {
	console.log("creds", credentials);
	console.log('propz',props)
	dispatch({ type: FavoriteTypes.GET_FAVE_START });
	axios
		.get("/api/users/2/favorites/4")
		// , credentials, {
		// 	headers: credentials
		// })

		.then(response => {
			// const token = response.data.token;
			// localStorage.setItem("token", token);
			dispatch({
				type: FavoriteTypes.GET_FAVE_SUCCESS,
				payload: response.data.favorite
			});
		})

		.catch(err =>
			dispatch({ type: FavoriteTypes.GET_FAVE_FAIL, payload: err.response })
		);
};

export const editFave = (credentials, props) => dispatch => {
	console.log("creds", credentials);
	console.log('propz',props)
	dispatch({ type: FavoriteTypes.EDIT_FAVE_START });
	axios
		.put("/api/users/2/favorites/4", {have_tried: true, personal_rating:"Loved It", notes: "updated via reducer"})
		// , credentials, {
		// 	headers: credentials
		// })

		.then(response => {
			// const token = response.data.token;
			// localStorage.setItem("token", token);
			dispatch({
				type: FavoriteTypes.EDIT_FAVE_SUCCESS,
				payload: response.data
			});
		})

		.catch(err =>
			dispatch({ type: FavoriteTypes.EDIT_FAVE_FAIL, payload: err.response })
		);
};


export const deleteFave = ({fid, user_id},props) => dispatch => {
	 console.log(props)
	dispatch({ type: FavoriteTypes.DELETE_FAVE_START });
	axios
		.delete(`/api/users/${user_id}/favorites/${fid}`)
		// , credentials, {
		// 	headers: credentials
		// })

		.then(response => {
			// const token = response.data.token;
			// localStorage.setItem("token", token);
			dispatch({
				type: FavoriteTypes.DELETE_FAVE_SUCCESS,
				payload: response.data
			});

			dispatch(fetchFaves(user_id));


		})

		.catch(err =>
			dispatch({ type: FavoriteTypes.DELETE_FAVE_FAIL, payload: err.response })
		);
};