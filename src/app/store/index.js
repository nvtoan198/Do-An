import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import { productSaga, rootReducer } from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true
  }),
  sagaMiddleware
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production"
});

function* rootSaga() {
  yield all([productSaga()]);
}

sagaMiddleware.run(rootSaga);

export default store;
