import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./core-ui/styles.css";
import "./core-ui/hovers.css";
import "./core-ui/responsive.css";
import "./routes/single-product/single-product.css";

import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);

reportWebVitals();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}