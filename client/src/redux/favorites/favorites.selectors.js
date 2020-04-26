import { createSelector } from "reselect";

export const selectAllFaves = (state) => state.favorite_reducer.faves;

export const getFaves = createSelector(
	[selectAllFaves],
	(faves) => faves.faves
);