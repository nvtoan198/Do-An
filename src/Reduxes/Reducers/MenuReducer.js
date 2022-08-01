import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { MenuTypes } from "Reduxes/Actions/MenuActions";

export const INITIAL_STATE = Immutable({
  listMenu: []
});

const getListMenuSuccess = (state, action) => {
  const { data } = action.response;
  return state.merge({
    listMenu: data
  });
};

const getListMenuFailed = (state, action) => {
  return state;
};
export const reducer = createReducer(INITIAL_STATE, {
  [MenuTypes.SUCCESS]: getListMenuSuccess,
  [MenuTypes.FAILED]: getListMenuFailed
});
