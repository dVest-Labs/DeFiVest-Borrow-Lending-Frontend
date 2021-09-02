import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Providers from "./Providers";

const loadingMarkup = (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vr",
      height: "100vh",
      backgroundColor: "#F7F8FD",
    }}
  >
    <h1 style={{ color: "#000" }}>Loading...</h1>
  </div>
);

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <Providers>
        <App />
      </Providers>
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
