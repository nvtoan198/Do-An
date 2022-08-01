import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  validatePrepaid: ["params", "onSuccess", "onFailed"],
  validatePrepaidSuccess: ["response"],
  validatePrepaidFailure: ["response"],
  savePrepaid: ["params"],
  delPrepaidCard: [],
  cardPaymentRequest: ["params", "onSuccess", "onFailed"],
  cardPaymentSuccess: ["response"],
  cardPaymentFailure: ["response"],
  cardActivate: ["params", "onSuccess", "onFailed"],
  cardActivateSuccess: ["response"],
  cardActivateFailure: ["response"],
  cardActivateOTP: ["params", "onSuccess", "onFailed"],
  cardActivateOTPSuccess: ["response"],
  cardActivateOTPFailure: ["response"],
  savePrepaidCheckoutValue: ["value"]
});

export const CardTypes = Types;

export default Creators;
