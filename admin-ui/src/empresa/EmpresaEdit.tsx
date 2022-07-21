import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const EmpresaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="cpnj" source="cpnj" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="nome" source="nome" />
      </SimpleForm>
    </Edit>
  );
};
