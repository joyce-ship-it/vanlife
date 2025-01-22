import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { makeServer } from "./server";

// Start MirageJS
if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
