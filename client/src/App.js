import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute'
import "./App.css";
import HomePage from "./page/HomePage";
import LogIn from "./page/LogIn";
import Register from "./page/RegisterPager";
import FavoritesPage from "./page/Favorites_page";


function App() {
	return (
		<div className="App">
			
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/register" component={Register} />
			<Route path="/login" component={LogIn} />
			<PrivateRoute path="/favorites" component={FavoritesPage} />
		
		</Switch>
	</div>
);
}

export default App;
