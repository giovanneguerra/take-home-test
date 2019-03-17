import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(reduxThunk));

window.store = store;

ReactDOM.render(
  <Provider store={window.store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
