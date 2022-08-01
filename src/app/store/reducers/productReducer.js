import { createSlice } from "@reduxjs/toolkit";
import { all, put, takeLatest } from "redux-saga/effects";

const initialState = {
  products: null,
  isLoading: false
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    fetchProducts(state) {
      state.isLoading = true;
    }
  }
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
export const selectProducts = (state) => state.product;

function* handleFetchProducts({ payload }) {
  try {
    console.log(123);
  } catch (e) {
    console.log(e);
  }
}

export function* productSaga() {
  yield takeLatest(productActions.fetchProducts().type, handleFetchProducts);
}
