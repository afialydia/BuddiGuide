import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.css";
import HomePage from "./page/home.page";
import FavoritesPage from "./page/favorites.page";



function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={HomePage} />
				<PrivateRoute path="/favorites" component={FavoritesPage} />
			</Switch>

		</div>
	);
}

export default App;
