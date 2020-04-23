import { createSelector } from "reselect";

const setUser = state => state.user;

export const selectUser = createSelector([setUser], user => user.user);