import { createSelector } from "reselect";

export const getUserId = (state) => state.userReducer.user.id;

export const getUser = (state) => state.userReducer.user;

export const getMessage = (state) => state.userReducer.message;

export const getErrors = (state) => state.userReducer.error;

export const selectUser = createSelector([getUser], (user) => user.id);
