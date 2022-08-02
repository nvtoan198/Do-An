import { createSlice } from "@reduxjs/toolkit";
import { all, put, takeLatest } from "redux-saga/effects";
import productApi from "../../api/productApi";

const initialState = {
  products: null,
  isLoading: false
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProducts(state) {
      state.isLoading = true;
    },
    fetchProductsSuccess(state, action) {
      state.products = action.payload;
      state.isLoading = false;
    },
    fetchProductsFailed(state) {
      state.isLoading = false;
    }
  }
});

function* handleFetchProducts({ payload }) {
  try {
    const data = yield productApi.fetchProducts();
    if (data) {
      yield put({
        type: productActions.fetchProductsSuccess().type,
        payload: data
      });
    } else {
      yield put({
        type: productActions.fetchProductsFailed().type
      });
    }
  } catch (e) {
    console.log(e);
    yield put({
      type: productActions.fetchProductsFailed().type
    });
  }
}

export function* productSaga() {
  yield takeLatest(productActions.fetchProducts().type, handleFetchProducts);
}

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
export const selectProducts = (state) => state.product;
