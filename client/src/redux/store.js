import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import root_reducer from "./root_reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
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

const persistConfig = {
	key: "root",
	storage,
}

const persisted_reducer = persistReducer(persistConfig,root_reducer)

export const store = createStore(
	persisted_reducer,
	composeEnhancers(applyMiddleware(...middlewares))
);

// store.dispatch(deleteFave())
// store.dispatch(loginUser())
// store.dispatch(getAllStrains())


export const persistor = persistStore(store);

export default { store, persistor };
