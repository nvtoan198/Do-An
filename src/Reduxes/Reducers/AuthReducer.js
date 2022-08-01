import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { AuthTypes } from "Reduxes/Actions/AuthActions";

export const INITIAL_STATE = Immutable({
  isAuthenticated: false,
  trainerId: 0,
  loginFetching: false
});

const login = (state, action) => {
  return state.merge({
    isFetching: true
  });
};

const loginSuccess = (state, action) => {
  const { response } = action;
  const { access_token, refresh_token, id } = response;

  return state.merge({
    isAuthenticated: true,
    accessToken: access_token,
    trainerId: id,
    refreshToken: refresh_token,
    isFetching: false
  });
};

const loginFailed = (state, action) => {
  return state.merge({
    isFetching: false,
    isAuthenticated: false
  });
};

const refreshTokenSuccess = (state, action) => {
  const { response } = action;
  const { access_token, refresh_token, trainer_id } = response;
  return state.merge({
    isAuthenticated: true,
    accessToken: access_token,
    trainerId: trainer_id,
    refreshToken: refresh_token,
    isFetching: false
  });
};

const refreshTokenFailed = (state, action) => {
  return state.merge({
    isAuthenticated: false,
    isFetching: false
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [AuthTypes.LOGIN]: login,
  [AuthTypes.LOGIN_SUCCESS]: loginSuccess,
  [AuthTypes.LOGIN_FAILED]: loginFailed,
  [AuthTypes.REFRESH_TOKEN_SUCCESS]: refreshTokenSuccess,
  [AuthTypes.REFRESH_TOKEN_FAILED]: refreshTokenFailed
});
