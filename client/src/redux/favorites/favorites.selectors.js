import { createSelector } from "reselect";

export const selectAllFaves = (state) => state.favorite_reducer.faves;

export const selectFaveAmount = (state)=> state.favorite_reducer.faves.length

export const selectFave = (state) => state.favorite_reducer.fave;

export const getFaves = createSelector(
	[selectAllFaves],
	(faves) => faves.faves
);
