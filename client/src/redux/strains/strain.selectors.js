import { createSelector } from "reselect";

const getAllStrains = (state) => state.strainReducer;

export const getStrains = createSelector(
	[getAllStrains],
	(strains) => strains.strains
);
