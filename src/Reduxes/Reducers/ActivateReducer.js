import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { ActivateHistoryTypes } from "Reduxes/Actions/ActivateHistoryActions";
import { AuthTypes } from "Reduxes/Actions/AuthActions";
import { transactionModels } from "Models//transactionModel";

export const INITIAL_STATE = Immutable({
  historyData: [],
  page: 1,
  historyFetching: false,
  startDay: "",
  endDay: "",
  dateFilter: false,
  totalMoney: 0
});

const getActivateHistory = (state, action) => {
  return state.merge({
    historyFetching: true
  });
};

const getActivateHistorySuccess = (state, action) => {
  const { payload } = action;
  const { current_page, last_page, data, total_money } = payload.data;
  const prevData = [...state.historyData];
  return state.merge({
    historyData:
      current_page === 1
        ? transactionModels(data)
        : transactionModels(prevData.concat(data)),
    currentPage: current_page,
    lastPage: last_page,
    historyFetching: false,
    totalMoney: total_money
  });
};

const getActivateHistoryFailed = (state, action) => {
  return state.merge({
    historyFetching: false
  });
};

const filterDate = (state, action) => {
  const { params } = action;
  return state.merge({
    dateFilter: true,
    startDay: params.startDay,
    endDay: params.endDay
  });
};

const filterDateClear = (state, action) => {
  return state.merge({
    dateFilter: false,
    startDay: "",
    endDay: ""
  });
};

const loginSuccess = (state, action) => {
  return state.merge(INITIAL_STATE);
};

export const reducer = createReducer(INITIAL_STATE, {
  [ActivateHistoryTypes.GET_ACTIVATE_HISTORY_SUCCESS]: getActivateHistorySuccess,
  [ActivateHistoryTypes.GET_ACTIVATE_HISTORY_FAILED]: getActivateHistoryFailed,
  [ActivateHistoryTypes.GET_ACTIVATE_HISTORY]: getActivateHistory,
  [ActivateHistoryTypes.FILTER_DATE]: filterDate,
  [ActivateHistoryTypes.FILTER_DATE_CLEAR]: filterDateClear,
  [AuthTypes.LOGIN_SUCCESS]: loginSuccess
});
