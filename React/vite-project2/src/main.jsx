import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/*
path "./"
import (AnyName: Default Export) from "path"
import js or jsx files. The extension is optional. 
*/
import SideEffectsConditions from "./SideEffectsConditions/StopWatch"; // Default Export
// import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SideEffectsConditions />
  </StrictMode>,
);
