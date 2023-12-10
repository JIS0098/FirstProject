import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Pretendard-Font-import
<link
  rel="stylesheet"
  as="style"
  crossOrigin
  href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
/>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
