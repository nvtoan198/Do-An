import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { CardTypes } from "Actions/CardActions";

export const INITIAL_STATE = Immutable({
  prepaidCheckoutValue: 0
});

const cardActivate = (state, action) => {
  return state;
};

const cardActivateSuccess = (state, action) => {
  return state;
};

const cardActivateFailure = (state, action) => {
  return state;
};

const cardActivateOTP = (state, action) => {
  return state;
};

const cardActivateOTPSuccess = (state, action) => {
  return state;
};

const cardActivateOTPFailure = (state, action) => {
  return state;
};

const savePrepaidCheckoutValue = (state, action) => {
  const { value } = action;
  return state.merge({ prepaidCheckoutValue: value });
};

export const reducer = createReducer(INITIAL_STATE, {
  [CardTypes.CARD_ACTIVATE]: cardActivate,
  [CardTypes.CARD_ACTIVATE_SUCCESS]: cardActivateSuccess,
  [CardTypes.CARD_ACTIVATE_FAILURE]: cardActivateFailure,
  [CardTypes.CARD_ACTIVATE_OTP]: cardActivateOTP,
  [CardTypes.CARD_ACTIVATE_OTP_SUCCESS]: cardActivateOTPSuccess,
  [CardTypes.CARD_ACTIVATE_OTP_FAILURE]: cardActivateOTPFailure,
  [CardTypes.SAVE_PREPAID_CHECKOUT_VALUE]: savePrepaidCheckoutValue
});
