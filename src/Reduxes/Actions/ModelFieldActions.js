import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getModelField: ["model"],
  getModelFieldSuccess: ["response"],
  getModelFieldFailed: ["response"],
  getOneModelField: ["model", "id"],
  getOneModelFieldSuccess: ["response"],
  getOneModelFieldFailed: ["model"],
  onFormChange: ["key", "value"],
  filterForm: ["model", "params"],
  filterFormSuccess: ["response"],
  filterFormFailed: ["response"],
  editForm: ["model", "id", "params"],
  editFormSuccess: ["response"],
  editFormFailed: ["response"],
  addForm: ["model", "id", "params"],
  addFormSuccess: ["response"],
  addFormFailed: ["response"],
  searchModel: ["model", "value"],
  saveAutoComplete: ["response"]
});

export const ModelFieldTypes = Types;

export default Creators;
