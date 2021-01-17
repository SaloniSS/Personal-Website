//https://marmelab.com/react-admin/Tutorial.html
//https://github.com/spintech-software/react-admin-auth0-example

import * as React from "react";
import { Admin, Resource } from "react-admin";
import { ProjectList, ProjectCreate } from "./components/projects";
//import jsonServerProvider from "ra-data-json-server";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import dataProvider from "./components/dataProvider";
import authProvider from "./components/authProvider";
import loginPage from "./pages/login";

// const dataProvider1 = jsonServerProvider(
//   "https://jsonplaceholder.typicode.com"
// );

const App = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={loginPage}
    >
      <Resource name="projects" list={ProjectList} create={ProjectCreate} />
    </Admin>
  );
};

export default App;
