import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";
import { createStore } from "redux";

ReactDOM.render(
   <Provider store={createStore(rootReducer)}>
      <App />
   </Provider>,
   document.getElementById("root")
);

serviceWorker.unregister();
