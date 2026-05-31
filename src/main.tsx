import * as ReactDOM from "react-dom/client";

import {StrictMode} from "react";
import App from "./App";

import "./globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
