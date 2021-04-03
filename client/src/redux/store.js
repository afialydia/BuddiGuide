import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root.reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {

	const { logger } = require(`redux-logger`);

  	middlewares.push(logger);
}

const persistConfig = {
	key: "root",
	storage,
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

export default { store, persistor };
