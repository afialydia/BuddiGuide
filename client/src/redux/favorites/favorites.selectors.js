import { createSelector } from "reselect";

export const selectAllFaves = (state) => state.favoriteReducer.faves;

export const selectFaveAmount = (state)=> state.favoriteReducer.faves.length

export const selectFave = (state) => state.favoriteReducer.fave;

export const getFaves = createSelector(
	[selectAllFaves],
	(faves) => faves.faves
);
