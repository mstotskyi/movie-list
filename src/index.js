import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./redux/store";

import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(store.getState());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
