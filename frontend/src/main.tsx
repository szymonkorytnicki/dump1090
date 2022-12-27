import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { AircraftsContextProvider } from "./utils/useAircrafts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AircraftsContextProvider>
      <App />
    </AircraftsContextProvider>
  </React.StrictMode>
);
