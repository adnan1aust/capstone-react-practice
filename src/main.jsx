import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/user";
import { ProductContextProvider } from "./contexts/products";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductContextProvider>
          <App />
        </ProductContextProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
