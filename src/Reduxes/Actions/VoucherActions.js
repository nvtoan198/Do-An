import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  validate: ["params", "onSuccess", "onFailed"],
  validateSuccess: ["response"],
  validateFailure: ["response"],
  saveValidated: ["params"],
  updateValidatedList: ["params"],
  cleanValidatedList: [],
  activeVouchers: ["params", "onSuccess", "onFailed"],
  activeVouchersSuccess: ["response"],
  activeVouchersFailure: ["response"],
  cleanData: [],
  saveBill: ["billCode"]
});

export const VoucherTypes = Types;

export default Creators;
