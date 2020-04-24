import { createSelector } from "reselect";

const getUser = state => state.user_reducer;

export const selectUser = createSelector(
	[getUser],
	user => user.user
);

