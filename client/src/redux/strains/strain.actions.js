import { StrainTypes } from "./strain.types";

import axios from "axios";
import axiosWithAuth from "../../utils/axiosWithAuth";

export const getAllStrains = () => (dispatch) => {
	dispatch({ type: StrainTypes.GET_ALL_STRAINS_START });
	axios
		.get("/api/strains/")
		.then((response) => {
			dispatch({
				type: StrainTypes.GET_ALL_STRAINS_SUCCESS,
				payload: response.data,
			});
			// console.log(payload)
		})
		.catch((err) =>
			dispatch({
				type: StrainTypes.GET_ALL_STRAINS_FAIL,
				payload: err.response,
			}), 
		);
};

export const getStrain = (id) => (dispatch) => {
	console.log("propz", id);
	dispatch({ type: StrainTypes.GET_STRAIN_START });
	axiosWithAuth
		.get(`strains/${id}`)

		.then((response) => {
			dispatch({
				type: StrainTypes.GET_STRAIN_SUCCESS,
				payload: response.data,
			});
		})

		.catch((err) =>
			dispatch({ type: StrainTypes.GET_STRAIN_FAIL, payload: err.response })
		);
};

