import { combineReducers } from "redux";
import user_reducer from "./user/user.reducer";
import strain_reducer from "./strains/strain.reducer";
import favorite_reducer from "./favorites/favorites.reducer";
import { UserTypes } from "./user/user.types";

const combinedReducers = combineReducers({
	user_reducer,
	strain_reducer,
	favorite_reducer,
});

const root_reducer = (state, action) => {
    
    if (action.type === UserTypes.LOGOUT_USER) {
      state = undefined;
    }
  
    return combinedReducers(state, action);
  };

export default root_reducer;
