import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getListMenu: ["params", "onSuccess", "onFailed"],
  success: ["response"],
  failed: ["response"]
});

export const MenuTypes = Types;

export default Creators;
