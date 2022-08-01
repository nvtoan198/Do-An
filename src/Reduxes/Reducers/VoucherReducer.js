import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { VoucherTypes } from "Actions/VoucherActions";
import { CardTypes } from "Actions/CardActions";

import codeModel from "Models/codeModel";
import prepaidCardModel from "Models/prepaidCardModel";

export const INITIAL_STATE = Immutable({
  loading: false,
  validateResult: {},
  validatedLocal: [],
  fetchingActive: false,
  messages: "",
  activeVoucherResponse: {},
  listToPrint: [],
  currentBillId: "",
  validatePrepaidResult: {},
  selectedPrepaid: {},
  cardPaymentResponse: {},
  billCode: ""
});

const validate = (state, action) => {
  return state.merge({
    loading: true
  });
};

const validatePrepaid = (state, action) => {
  return state.merge({
    loading: true
  });
};

const validateSuccess = (state, action) => {
  const { response } = action;
  const { data } = response;
  const { code } = data;

  return state.merge({
    loading: false,
    validateResult: codeModel(code)
  });
};

const validateFailure = (state, action) => {
  const { response } = action;
  return state.merge({
    loading: false,
    validateResult: response
  });
};

const validatePrepaidSuccess = (state, action) => {
  const { response } = action;
  const { data } = response;
  const { card } = data;

  return state.merge({
    loading: false,
    validatePrepaidResult: prepaidCardModel(card)
  });
};

const validatePrepaidFailure = (state, action) => {
  const { response } = action;
  return state.merge({
    loading: false,
    validatePrepaidResult: response
  });
};

const savePrepaid = (state, action) => {
  const { params } = action;
  return state.merge({
    selectedPrepaid: params
  });
};

const delPrepaidCard = (state, action) => {
  return state.merge({
    selectedPrepaid: {}
  });
};

const saveValidated = (state, action) => {
  const { params } = action;
  return state.merge({
    validatedLocal: [...state.validatedLocal, ...[params]]
  });
};

const updateValidatedList = (state, action) => {
  const { params } = action;
  return state.merge({
    validatedLocal: params
  });
};
const cleanValidatedList = (state, action) => {
  return state.merge({
    listToPrint: [...state.validatedLocal],
    validatedLocal: [],
    selectedPrepaid: {}
  });
};
const activeVoucher = (state, action) => {
  return state.merge({
    fetchingActive: true
  });
};
const activeVouchersSuccess = (state, action) => {
  const { response } = action;
  const { data } = response;
  return state.merge({
    fetchingActive: false,
    activeVoucherResponse: data
  });
};
const activeVouchersFailure = (state, action) => {
  const { response } = action;
  const { message } = response;
  return state.merge({
    fetchingActive: false,
    messages: message
  });
};

const cardPaymentSuccess = (state, action) => {
  const { response } = action;
  const { data } = response;

  return state.merge({
    fetchingActive: false,
    cardPaymentResponse: prepaidCardModel(data.card)
  });
};
const cardPaymentFailure = (state, action) => {
  const { response } = action;
  const { message } = response;
  return state.merge({
    fetchingActive: false,
    messages: message
  });
};
const saveBill = (state, action) => {
  const { billCode } = action;
  return state.merge({
    billCode: billCode
  });
};
const cleanData = (state, action) => {
  return state.merge(INITIAL_STATE);
};

export const reducer = createReducer(INITIAL_STATE, {
  [VoucherTypes.VALIDATE]: validate,
  [CardTypes.VALIDATE_PREPAID]: validatePrepaid,
  [VoucherTypes.VALIDATE_SUCCESS]: validateSuccess,
  [VoucherTypes.VALIDATE_FAILURE]: validateFailure,
  [CardTypes.VALIDATE_PREPAID_SUCCESS]: validatePrepaidSuccess,
  [CardTypes.VALIDATE_PREPAID_FAILURE]: validatePrepaidFailure,
  [CardTypes.SAVE_PREPAID]: savePrepaid,
  [CardTypes.DEL_PREPAID_CARD]: delPrepaidCard,
  [CardTypes.CARD_PAYMENT_SUCCESS]: cardPaymentSuccess,
  [CardTypes.CARD_PAYMENT_FAILURE]: cardPaymentFailure,
  [VoucherTypes.SAVE_VALIDATED]: saveValidated,
  [VoucherTypes.UPDATE_VALIDATED_LIST]: updateValidatedList,
  [VoucherTypes.CLEAN_VALIDATED_LIST]: cleanValidatedList,
  [VoucherTypes.ACTIVE_VOUCHERS]: activeVoucher,
  [VoucherTypes.ACTIVE_VOUCHERS_SUCCESS]: activeVouchersSuccess,
  [VoucherTypes.ACTIVE_VOUCHERS_FAILURE]: activeVouchersFailure,
  [VoucherTypes.CLEAN_DATA]: cleanData,
  [VoucherTypes.SAVE_BILL]: saveBill
});
