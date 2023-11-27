import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
/* import { UserProvider } from "./contexts/user"; */
import { CategoriesProvider } from "./contexts/categories";
import { CartContextProvider } from "./contexts/cart";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <UserProvider> */}
        <CategoriesProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </CategoriesProvider>
        {/* </UserProvider> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
