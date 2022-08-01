import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { OperatorTypes } from "Reduxes/Actions/OperatorActions";

export const INITIAL_STATE = Immutable({
  Operator: {}
});

const getOperatorSuccess = (state, action) => {
  const { response } = action;
  return state.merge({
    Operator: response.data
  });
};
const getOperatorFailed = (state, action) => {
  return state.merge({});
};

export const reducer = createReducer(INITIAL_STATE, {
  [OperatorTypes.GET_OPERATOR_SUCCESS]: getOperatorSuccess,
  [OperatorTypes.GET_OPERATOR_FAILED]: getOperatorFailed
});
