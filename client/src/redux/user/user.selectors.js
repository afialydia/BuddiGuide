import { createSelector } from "reselect";

export const getUserId = (state) => state.user_reducer.user.id;

export const getUser = (state) => state.user_reducer.user;

export const selectUser = createSelector([getUser], (user) => user.id);
