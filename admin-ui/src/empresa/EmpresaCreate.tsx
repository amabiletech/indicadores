import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const EmpresaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="cpnj" source="cpnj" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="nome" source="nome" />
      </SimpleForm>
    </Create>
  );
};
