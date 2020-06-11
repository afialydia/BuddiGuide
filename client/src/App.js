import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.css";
import HomePage from "./page/HomePage";

import Register from "./page/RegisterPager";
import FavoritesPage from "./page/Favorites_page";
import Login_Modal from "./components/login_modal";


function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login_Modal} />

				<PrivateRoute path="/favorites" component={FavoritesPage} />
			</Switch>

		</div>
	);
}

export default App;
