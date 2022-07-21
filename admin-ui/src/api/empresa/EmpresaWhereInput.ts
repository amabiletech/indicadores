import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EmpresaWhereInput = {
  cpnj?: StringFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  nome?: StringFilter;
};
