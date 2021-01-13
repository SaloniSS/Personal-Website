//https://marmelab.com/react-admin/Tutorial.html
//https://github.com/spintech-software/react-admin-auth0-example

import * as React from "react";
import { Admin, Resource } from "react-admin";
import { ProjectList, ProjectCreate } from "./components/projects";
import Dashboard from "./dashboard";
import jsonServerProvider from "ra-data-json-server";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import dataProvider from "./components/dataProvider";

const dataProvider1 = jsonServerProvider(
  "https://jsonplaceholder.typicode.com"
);

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div>
      {(!isAuthenticated || user.sub !== process.env.REACT_APP_ACCOUNT) && (
        <LoginButton />
      )}

      {isAuthenticated && user.sub === process.env.REACT_APP_ACCOUNT && (
        <div>
          {/* <Admin dashboard={Dashboard} dataProvider={dataProvider1}>
            <Resource
              name="posts"
              list={PostList}
              edit={PostEdit}
              create={PostCreate}
            />
          </Admin> */}
          <Admin dataProvider={dataProvider}>
            <Resource
              name="projects"
              list={ProjectList}
              create={ProjectCreate}
            />
          </Admin>
          <LogoutButton />
        </div>
      )}
    </div>
  );
};

export default App;
