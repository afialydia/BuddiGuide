import { FavoriteTypes } from "./favorites.types";
import { UserTypes } from "../user/user.types";


const INITIAL_STATE = {
	fetchingFaves: false,
	fetchedFaves: false,
	fetchingFave: false,
	fetchedFave: false,
	postingFave: false,
	postedFave: false,
	editingFave: false,
	editedFave: false,
	deletingFave: false,
	deletedFave: false,
	faves: [],
	fave: {},
	error: "",
	status: "",
};

const favoriteReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FavoriteTypes.GET_FAVES_START:
			return {
				...state,
				fetchingFaves: true,
				fetchedFaves: false,
				error: "",
			};
		case FavoriteTypes.GET_FAVES_SUCCESS:
			return {
				...state,
				fetchingFaves: false,
				fetchedFaves: true,
				faves: action.payload.favorites,
				error: "",
			};
		case FavoriteTypes.GET_FAVES_FAIL:
			return {
				...state,
				fetchedFaves: false,
				error: action.payload,
			};
		case FavoriteTypes.GET_FAVE_START:
			return {
				...state,
				fetchingFave: true,
				fetchedFave: false,
				error: "",
			};
		case FavoriteTypes.GET_FAVE_SUCCESS:
			return {
				...state,
				fetchingFave: false,
				fetchedFave: true,
				fave: action.payload,
				error: "",
			};
		case FavoriteTypes.GET_FAVE_FAIL:
			return {
				...state,
				fetchedFave: false,
				error: action.payload,
			};
		case FavoriteTypes.POST_FAVE_START:
			return {
				...state,
				postingFave: true,
				postedFave: false,
				error: "",
			};
		case FavoriteTypes.POST_FAVE_SUCCESS:
			return {
				...state,
				postingFave: false,
				postedFave: true,
				fave: action.payload,
				error: "",
			};
		case FavoriteTypes.POST_FAVE_FAIL:
			return {
				...state,
				error: action.payload,
			};
		case FavoriteTypes.EDIT_FAVE_START:
			return {
				...state,
				editingFave: true,
				editedFave: false,
				error: "",
			};
		case FavoriteTypes.EDIT_FAVE_SUCCESS:
			return {
				...state,
				editingFave: false,
				editedFave: true,
				error: "",
			};
		case FavoriteTypes.EDIT_FAVE_FAIL:
			return {
				...state,
				error: action.payload,
			};
		case FavoriteTypes.DELETE_FAVE_START:
			return {
				...state,
				deletingFave: true,
				deletedFave: false,
				error: "",
			};
		case FavoriteTypes.DELETE_FAVE_SUCCESS:
			return {
				...state,
				deletingFave: false,
				deletedFave: true,
				error: "",
				status: action.payload,
			};
		case FavoriteTypes.DELETE_FAVE_FAIL:
			return {
				...state,
				error: action.payload,
			};
		case UserTypes.LOGOUT_USER:
			return INITIAL_STATE;

		default:
			return state;
	}
};

export default favoriteReducer;
