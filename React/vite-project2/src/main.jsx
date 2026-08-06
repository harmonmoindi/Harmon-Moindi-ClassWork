import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/*
path "./"
import (AnyName: Default Export) from "path"
import js or jsx files. The extension is optional. 
*/
import GitHubProjects from "./GitHubProjects/index"; // Default Export
// import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GitHubProjects />
  </StrictMode>,
);
