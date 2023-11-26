import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App.jsx";
import "./index.css";
import { registerSW } from "virtual:pwa-register";
registerSW();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={createStore(() => 1)}>
      <App />
    </Provider>
  </React.StrictMode>
);
