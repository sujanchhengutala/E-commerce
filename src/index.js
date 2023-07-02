import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./Context/ProductContext";
import { FilterContextProvider } from "./Context/FilterContext";
import { CartContextprovider } from "./Context/cartContext";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
  domain="dev-37md8nyttw5m8rhm.us.auth0.com"
  clientId="ceAzriQwBVO9wQncd8oEOGmAiIZ6iZCf"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <AppProvider>
    <FilterContextProvider>
      <CartContextprovider>
        <App />
      </CartContextprovider>
    </FilterContextProvider>
  </AppProvider>
  </Auth0Provider>
);
