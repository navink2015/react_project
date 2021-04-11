import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.render(
  <React.StrictMode>
    {/* <Auth0Provider
    domain="dev-1a7lerv6.us.auth0.com"
    clientId="J4w65mssvxkas3m3Chnmvd094V6KvMPz"
    redirectUri={window.location.origin}
  > */}
    <App />
    {/* </Auth0Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
