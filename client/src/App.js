import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import LogIn from "./page/LogIn";
import Register from "./page/RegisterPager";

function App() {
	return (
		<div className="App">
		{/* <Header /> */}
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/register" component={Register} />
			<Route path="/login" component={LogIn} />
			{/* <PrivateRoute path="/explore" component={Explore} /> */}
			{/* <PrivateRoute exact path="/edit" component={Home} /> */}

			{/* <PrivateRoute path="/stylist/:id" component={Profile} /> */}
		</Switch>
	</div>
);
}

export default App;
