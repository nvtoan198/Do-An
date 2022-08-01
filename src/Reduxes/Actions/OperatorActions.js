import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getOperator: [""],
  getOperatorSuccess: ["response"],
  getOperatorFailed: ["response"],
  resetTrainerPassword: ["params", "onSuccess", "onFailure"]
});

export const OperatorTypes = Types;

export default Creators;
