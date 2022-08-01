import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { ModelFieldTypes } from "Reduxes/Actions/ModelFieldActions";

export const INITIAL_STATE = Immutable({
  currentModel: {},
  currentModelItems: {},
  currentOneModel: {},
  modelName: "",
  filter: {},
  autocompleteItems: []
});

const getModelFieldSuccess = (state, action) => {
  const { response } = action;
  const { model, items } = response;
  return state.merge({
    currentModel: model,
    currentModelItems: items
  });
};

const getModelFieldFailed = (state, action) => {
  return state;
};

const getOneModelFieldSuccess = (state, action) => {
  const { response } = action;
  return state.merge({
    currentOneModel: response,
    model_name: response.model.model_name
  });
};

const getOneModelFieldFailed = (state, action) => {
  return state;
};

const editFormSuccess = (state, action) => {
  const { response } = action;
  return state.merge({
    currentOneModel: response.item
  });
};

const editFormFailed = (state, action) => {
  return state;
};
const addFormSuccess = (state, action) => {
  const { response } = action;
  return state.merge({});
};

const addFormFailed = (state, action) => {
  return state;
};

const saveAutoComplete = (state, action) => {
  const { response } = action;
  return state.merge({
    autocompleteItems: response.items.data
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [ModelFieldTypes.GET_MODEL_FIELD_SUCCESS]: getModelFieldSuccess,
  [ModelFieldTypes.GET_MODEL_FIELD_FAILED]: getModelFieldFailed,
  [ModelFieldTypes.EDIT_FORM_SUCCESS]: editFormSuccess,
  [ModelFieldTypes.EDIT_FORM_FAILED]: editFormFailed,
  [ModelFieldTypes.ADD_FORM_SUCCESS]: addFormSuccess,
  [ModelFieldTypes.ADD_FORM_FAILED]: addFormFailed,
  [ModelFieldTypes.SAVE_AUTO_COMPLETE]: saveAutoComplete,
  [ModelFieldTypes.GET_ONE_MODEL_FIELD_SUCCESS]: getOneModelFieldSuccess,
  [ModelFieldTypes.GET_ONE_MODEL_FIELD_FAILED]: getOneModelFieldFailed
});
