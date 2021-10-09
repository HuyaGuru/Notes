import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from "./app/store"
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import App from './components/App';

import "./index.css"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorkerRegistration.unregister();