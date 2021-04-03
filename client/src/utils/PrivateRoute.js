import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login_Modal from "../page/login.modal";
import menu from "../components/menu";

function PrivateRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (localStorage.getItem("authenticate")) {
					return <Component {...props} />;
				} else {
					return <Redirect to={Login_Modal} />;
				}
			}}
		/>
	);
}

export default PrivateRoute;
