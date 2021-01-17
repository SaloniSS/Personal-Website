import { Auth0Client } from "@auth0/auth0-spa-js";

const auth0 = new Auth0Client({
  domain: process.env.REACT_APP_AUTH_DOMAIN,
  client_id: process.env.REACT_APP_CLIENT,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI,
  cacheLocation: "localstorage",
  useRefreshTokens: true,
});

const authProvider = {
  // called when the user attempts to log in
  login: (url) => {
    if (typeof url === "undefined") {
      return auth0.loginWithRedirect();
    }
    return auth0.handleRedirectCallback(url.location);
  },
  // called when the user clicks on the logout button
  logout: () => {
    return auth0.isAuthenticated().then(function (isAuthenticated) {
      if (isAuthenticated) {
        // need to check for this as react-admin calls logout in case checkAuth failed
        return auth0.logout({
          redirect_uri: window.location.origin,
          federated: true, // have to be enabled to invalidate refresh token
        });
      }
      return Promise.resolve();
    });
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return auth0.isAuthenticated().then(function (isAuthenticated) {
      if (isAuthenticated) {
        return Promise.resolve();
      }
      return auth0.getTokenSilently();
    });
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => {
    return Promise.resolve();
  },
};

export default authProvider;
