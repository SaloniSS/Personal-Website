//https://marmelab.com/react-admin/Tutorial.html

import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from "./users";
import Dashboard from "./dashboard";
import jsonServerProvider from "ra-data-json-server";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div>
      {(!isAuthenticated || user.sub != process.env.REACT_APP_ACCOUNT) && (
        <LoginButton />
      )}

      {isAuthenticated && user.sub === process.env.REACT_APP_ACCOUNT && (
        <div>
          <Admin dashboard={Dashboard} dataProvider={dataProvider}>
            <Resource
              name="posts"
              list={PostList}
              edit={PostEdit}
              create={PostCreate}
            />
            <Resource name="users" list={UserList} />
          </Admin>
          <LogoutButton />
        </div>
      )}
    </div>
  );
};

export default App;
