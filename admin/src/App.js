import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from "./users";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
