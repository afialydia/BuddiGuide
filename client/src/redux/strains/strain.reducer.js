import { StrainTypes } from "./strain.types";
import { UserTypes } from "../user/user.types";


const INITIAL_STATE = {
	fetchingAllStrains: false,
	allStrainsFetched: false,
	fetchedOneStrain: false,
	fetchingOneStrain: false,
	strain: {},
	strains: [],
	error: "",
};

const strain_reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case StrainTypes.GET_ALL_STRAINS_START:
			return {
				...state,
				fetchingAllStrains: true,
				allStrainsFetched: false,
				error: "",
			};
		case StrainTypes.GET_ALL_STRAINS_SUCCESS:
			return {
				...state,
				fetchingAllStrains: false,
				allStrainsFetched: true,
				strains: action.payload,
				error: "",
			};
		case StrainTypes.GET_ALL_STRAINS_FAIL:
			return {
				...state,
				allStrainsFetched: false,
				error: action.payload,
			};
		case StrainTypes.GET_STRAIN_START:
			return {
				...state,
				fetchingOneStrain: true,
				fetchedOneStrain: false,
				error: "",
			};
		case StrainTypes.GET_STRAIN_SUCCESS:
			return {
				...state,
				strain: action.payload.strain,
				fetchingOneStrain: false,
				fetchedOneStrain: true,
				error: "",
			};
		case StrainTypes.GET_STRAIN_FAIL:
			return {
				...state,
				fetchingOneStrain: false,
				fetchedOneStrain: false,
				error: action.payload,
			};

		case UserTypes.LOGOUT_USER:
			return {
				...state,
			};
		default:
			return state;
	}
};

export default strain_reducer;
