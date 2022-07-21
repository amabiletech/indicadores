import { Empresa as TEmpresa } from "../api/empresa/Empresa";

export const EMPRESA_TITLE_FIELD = "cpnj";

export const EmpresaTitle = (record: TEmpresa): string => {
  return record.cpnj || record.id;
};
