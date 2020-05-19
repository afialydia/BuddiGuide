import { FavoriteTypes } from "./favorites.types";
import axiosWithAuth from "../../utils/axiosWithAuth";

export const fetchFaves = (user) => (dispatch) => {
	dispatch({ type: FavoriteTypes.GET_FAVES_START });
	axiosWithAuth()
		.get(`users/${user}/favorites`)
		.then((response) => {
			dispatch({
				type: FavoriteTypes.GET_FAVES_SUCCESS,
				payload: response.data,
			});
		})
		.catch((err) =>
			dispatch({ type: FavoriteTypes.GET_FAVES_FAIL, payload: err.response })
		);
};

export const addFave = (props) => (dispatch) => {
	dispatch({ type: FavoriteTypes.POST_FAVE_START });
	axiosWithAuth()
		.post(`strains/${props.id}`, {
			user_id: `${props.user_id}`,
			personal_rating: "Have Not Tried Yet",
		})

		.then((response) => {
			dispatch({
				type: FavoriteTypes.POST_FAVE_SUCCESS,
				payload: response.data.favorite,
			});
			dispatch(fetchFaves(props.user_id));
		})

		.catch((err) =>
			dispatch({ type: FavoriteTypes.POST_FAVE_FAIL, payload: err.response })
		);
};

export const fetchFave = ({ fid, user_id }, props) => (dispatch) => {
	dispatch({ type: FavoriteTypes.GET_FAVE_START });
	axiosWithAuth()
		.get(`users/${user_id}/favorites/${fid}`)

		.then((response) => {
			dispatch({
				type: FavoriteTypes.GET_FAVE_SUCCESS,
				payload: response.data.favorite,
			});
		})

		.catch((err) =>
			dispatch({ type: FavoriteTypes.GET_FAVE_FAIL, payload: err.response })
		);
};

export const editFave = ({ fid }, state) => (dispatch) => {
	dispatch({ type: FavoriteTypes.EDIT_FAVE_START });
	axiosWithAuth()
		.put(`users/${state.user_id}/favorites/${fid}`, {
			have_tried: "true",
			personal_rating: `${state.personal_rating}`,
			notes: `${state.notes}`,
		})

		.then((response) => {
			dispatch({
				type: FavoriteTypes.EDIT_FAVE_SUCCESS,
				payload: response.data,
			});
			dispatch(fetchFaves(`${state.user_id}`));
		})

		.catch((err) =>
			dispatch({ type: FavoriteTypes.EDIT_FAVE_FAIL, payload: err.response })
		);
};

export const deleteFave = ({ fid, user_id }, props) => (dispatch) => {
	dispatch({ type: FavoriteTypes.DELETE_FAVE_START });
	axiosWithAuth()
		.delete(`users/${user_id}/favorites/${fid}`)

		.then((response) => {
			dispatch({
				type: FavoriteTypes.DELETE_FAVE_SUCCESS,
				payload: response.data,
			});

			dispatch(fetchFaves(user_id));
		})

		.catch((err) =>
			dispatch({ type: FavoriteTypes.DELETE_FAVE_FAIL, payload: err.response })
		);
};
