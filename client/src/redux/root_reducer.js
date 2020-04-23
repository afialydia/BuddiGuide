import { combineReducers } from "redux"
import user_reducer from './user/user.reducer'
import strain_reducer from './strains/strain.reducer'
import favorite_reducer from './favorites/favorites.reducer'

export default combineReducers({
    user_reducer,
    strain_reducer,
    favorite_reducer
})