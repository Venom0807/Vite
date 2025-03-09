import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import UseStateComponent from "./hooks/01-useState/UseStateComponent";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseStateComponent />
  </StrictMode>
);
