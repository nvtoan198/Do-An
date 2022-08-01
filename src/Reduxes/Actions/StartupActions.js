import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  startup: ["callback"],
  startupSuccess: ["response"],
  startupFailed: ["response"],
  getListMenu: ["params"]
});

export const StartupTypes = Types;

export default Creators;
