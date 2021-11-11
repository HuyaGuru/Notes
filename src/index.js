import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { store } from "./app/store";
import persistor from "./app/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import App from "./components/App";

import "./index.css";

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById("root")
);
serviceWorkerRegistration.register();
