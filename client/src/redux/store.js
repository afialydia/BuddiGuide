import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import root_reducer from "./root_reducer";
import {registerUser, loginUser} from './user/user.actions'
import { getAllStrains, getSrain } from "./strains/strain.actions";
import {
	fetchFaves,
	fetchFave,
	addFave,
	editFave,
	deleteFave,
} from "./favorites/favorites.actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk, logger];

const store = createStore(
	root_reducer,
	composeEnhancers(applyMiddleware(...middlewares))
);

// store.dispatch(deleteFave())
// store.dispatch(loginUser())
// store.dispatch(getAllStrains())

export default store;
