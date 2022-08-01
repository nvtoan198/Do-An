import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getActivateHistory: ["params", "onSuccess", "onFailed"],
  getActivateHistorySuccess: ["payload"],
  getActivateHistoryFailed: ["payload"],
  filterDate: ["params"],
  filterDateClear: []
});

export const ActivateHistoryTypes = Types;

export default Creators;
