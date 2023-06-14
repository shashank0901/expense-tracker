import React from "react";

import { createRoot } from "react-dom/client";

import { Auth0Provider } from "@auth0/auth0-react";

import App from "./app";

// import ReactDom from "react-dom";
import "./index.css";

const container = document.getElementById("root");

const root = createRoot(container);

// ye normally we do when we just have to render the App, but if we have to add the auth0 login and authentication etc, then we wrap this around the Auth0Provider component as shown below

// root.render(<App />);

root.render(
  <Auth0Provider
    domain="dev-a4g2jjk0slqkz4ur.us.auth0.com"
    clientId="UBNUPa2sR3tpIN0eLPJlQ7UNDpAZmWNJ"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
