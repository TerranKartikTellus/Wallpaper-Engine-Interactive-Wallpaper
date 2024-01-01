// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routess from "./Routes";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routess />
    </Provider>
  </React.StrictMode>
);
