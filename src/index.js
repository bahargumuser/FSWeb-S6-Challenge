// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);

reportWebVitals();
/* import { worker } from "./mocks/browser";
worker.start();

ReactDOM.render(<App />, document.getElementById("root"));
 */
