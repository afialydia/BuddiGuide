import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";

import App from "./App";
import { store, persistor } from "./redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<PersistGate loading={"loading"} persistor={persistor}>
				<App />
			</PersistGate>
		</Router>
	</Provider>,
	rootElement
);
