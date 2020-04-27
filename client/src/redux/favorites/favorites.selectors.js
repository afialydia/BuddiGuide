import { createSelector } from "reselect";

export const selectAllFaves = (state) => state.favorite_reducer.faves;

export const selectFave = (state) => state.favorite_reducer.fave;
export const getFaves = createSelector(
	[selectAllFaves],
	(faves) => faves.faves
);
