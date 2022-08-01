import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  login: ["params", "onSuccess", "onFailure"],
  loginSuccess: ["response"],
  loginFailed: ["response"],
  refreshToken: ["onSuccess", "onFailure"],
  refreshTokenSuccess: ["response"],
  refreshTokenFailed: ["response"]
});

export const AuthTypes = Types;

export default Creators;
