import { createSelector } from "reselect";

const getAllStrains = (state) => state.strain_reducer;

export const getStrains = createSelector(
	[getAllStrains],
	(strains) => strains.strains
);
