import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <Auth0Provider
    domain="energify.us.auth0.com"
    clientId="MIKYklJLL5kDfvfCvzzpjaOlVZXXdPNM"
    redirectUri={window.location.origin}
  >
    <ChakraProvider>
      <Router>
        <App />
      </Router>
    </ChakraProvider>{" "}
  </Auth0Provider>,
  document.getElementById("root")
);
