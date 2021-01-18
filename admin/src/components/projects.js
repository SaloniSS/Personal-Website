import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Create,
  SimpleForm,
  TextInput,
  UrlField,
  BooleanField,
  BooleanInput,
  SelectInput,
  Filter,
  Show,
  SimpleShowLayout,
  Edit,
  ShowButton,
  DeleteButton,
} from "react-admin";

const ProjectTitle = ({ record }) => {
  return <span>Project {record ? `"${record.title}"` : ""}</span>;
};

export const ProjectShow = (props) => (
  <Show title={<ProjectTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source="title" />
      <TextField source="organization" />
      <TextField source="date" />
      <TextField source="award" />
      <TextField source="description" />
      <TextField source="contribution" />
      <UrlField source="portfolio" />
      <UrlField source="code" />
      <TextField source="category" />
      <BooleanField source="featured" />
    </SimpleShowLayout>
  </Show>
);

const ProjectFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Title" source="title" />
    <BooleanInput label="Featured" source="featured" />
  </Filter>
);

export const ProjectList = (props) => (
  <List filters={<ProjectFilter />} {...props}>
    <Datagrid>
      {/* <TextField source="id" /> */}
      <TextField source="title" />
      <TextField source="organization" />
      <TextField source="date" />
      <TextField source="award" />
      <TextField source="description" />
      <TextField source="contribution" />
      <UrlField source="portfolio" />
      <UrlField source="code" />
      <TextField source="category" />
      <BooleanField source="featured" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const ProjectCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="organization" />
      <TextInput source="date" />
      <TextInput source="award" />
      <TextInput multiline source="description" />
      <TextInput multiline source="contribution" />
      <TextInput source="portfolio" />
      <TextInput source="code" />
      <SelectInput
        source="category"
        choices={[
          { id: "regular", name: "Regular" },
          { id: "winner", name: "Winner" },
          { id: "long", name: "Long" },
        ]}
      />
      <BooleanInput label="Featured" source="featured" />
    </SimpleForm>
  </Create>
);

export const ProjectEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="title" />
      <TextInput source="organization" />
      <TextInput source="date" />
      <TextInput source="award" />
      <TextInput multiline source="description" />
      <TextInput multiline source="contribution" />
      <TextInput source="portfolio" />
      <TextInput source="code" />
      <SelectInput
        source="category"
        choices={[
          { id: "regular", name: "Regular" },
          { id: "winner", name: "Winner" },
          { id: "long", name: "Long" },
        ]}
      />
      <BooleanInput label="Featured" source="featured" />
    </SimpleForm>
  </Edit>
);
