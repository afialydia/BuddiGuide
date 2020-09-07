import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.css";
import HomePage from "./page/HomePage";

import Register from "./page/RegisterPager";
import FavoritesPage from "./page/Favorites_page";
import Login_Modal from "./components/login_modal";
import Loader from "./components/loader";
import About from "./components/about/about-section";


function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/register" component={Register} />
				{/* <Route path="/login" component={About} /> */}

				<PrivateRoute path="/favorites" component={FavoritesPage} />
			</Switch>

		</div>
	);
}

export default App;
