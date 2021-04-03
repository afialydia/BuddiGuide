import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import strainReducer from "./strains/strain.reducer";
import favoriteReducer from "./favorites/favorites.reducer";

const combinedReducers = combineReducers({
	userReducer,
	strainReducer,
	favoriteReducer,
});

const rootReducer = (state, action) => {
    return combinedReducers(state, action);
  };

export default rootReducer;
